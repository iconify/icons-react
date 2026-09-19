import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uccxzob9h.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uccxzob9h"/>`,
		"fallback": "topcoat:arrow-left",
	});
}

export default Component;
