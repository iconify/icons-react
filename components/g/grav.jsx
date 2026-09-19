import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc-rd5b-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc-rd5b-v"/>`,
		"fallback": "fa-brands:grav",
	});
}

export default Component;
