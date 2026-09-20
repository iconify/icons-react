import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjfhaw4wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjfhaw4wq"/>`,
		"fallback": "keyline-icons:align-justify",
	});
}

export default Component;
