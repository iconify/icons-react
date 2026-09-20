import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1_sbqmea.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1_sbqmea"/>`,
		"fallback": "oui:editor-underline",
	});
}

export default Component;
