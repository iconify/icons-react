import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqq126x0h.css';
import '../../css/v/vzdg82byd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqq126x0h"/><path class="vzdg82byd"/>`,
		"fallback": "openmoji:gloves",
	});
}

export default Component;
