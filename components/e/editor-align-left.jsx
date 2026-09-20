import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p40nu0x8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p40nu0x8g"/>`,
		"fallback": "oui:editor-align-left",
	});
}

export default Component;
