import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mml-20uch.css';
import '../../css/e/e80us0jnl.css';
import '../../css/t/t9qlqybcr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mml-20uch"/><path class="e80us0jnl"/><path class="t9qlqybcr"/>`,
		"fallback": "energy-icons:ferris-wheel-48",
	});
}

export default Component;
