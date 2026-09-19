import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek-ptob2h.css';
import '../../css/v/vvuy5gbwu.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek-ptob2h"/><path class="vvuy5gbwu"/>`,
		"fallback": "fontisto:eye",
	});
}

export default Component;
