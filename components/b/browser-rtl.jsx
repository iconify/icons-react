import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m66w98bom.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m66w98bom"/>`,
		"fallback": "ooui:browser-rtl",
	});
}

export default Component;
