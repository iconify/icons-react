import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz2igeb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz2igeb_r"/>`,
		"fallback": "simple-icons:apachehbase",
	});
}

export default Component;
