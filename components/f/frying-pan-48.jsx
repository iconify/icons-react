import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajtnjnklx.css';
import '../../css/s/sb9rsi1bu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajtnjnklx"/><path class="sb9rsi1bu"/>`,
		"fallback": "energy-icons:frying-pan-48",
	});
}

export default Component;
