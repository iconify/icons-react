import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wte_qbcjx.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wte_qbcjx"/>`,
		"fallback": "fontisto:braille",
	});
}

export default Component;
