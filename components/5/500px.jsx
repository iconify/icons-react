import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv4wv-b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv4wv-b4m"/>`,
		"fallback": "simple-icons:500px",
	});
}

export default Component;
