import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2dktezep.css';
import '../../css/j/jvok5pbbw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2dktezep"/><path class="jvok5pbbw"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-shield-lock",
	});
}

export default Component;
