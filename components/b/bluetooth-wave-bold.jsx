import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx30rnqyk.css';
import '../../css/g/g-qkl-bcv.css';
import '../../css/e/em089opbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx30rnqyk"/><path class="g-qkl-bcv"/><path class="em089opbt"/>`,
		"fallback": "solar:bluetooth-wave-bold",
	});
}

export default Component;
