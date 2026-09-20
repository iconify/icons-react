import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkoq81btf.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkoq81btf"/>`,
		"fallback": "medical-icon:i-fire-extinguisher",
	});
}

export default Component;
