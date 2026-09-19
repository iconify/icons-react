import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu4v_kdxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tu4v_kdxb"/>`,
		"fallback": "iconamoon:calculator-fill",
	});
}

export default Component;
