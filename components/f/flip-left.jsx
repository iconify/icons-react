import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oiy9xvbxn.css';
import '../../css/t/tbwjrrbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oiy9xvbxn"/><path class="tbwjrrbja"/></g>`,
		"fallback": "hugeicons:flip-left",
	});
}

export default Component;
