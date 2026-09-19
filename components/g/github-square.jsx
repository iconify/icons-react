import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggysgtp2m.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggysgtp2m"/>`,
		"fallback": "fa-brands:github-square",
	});
}

export default Component;
