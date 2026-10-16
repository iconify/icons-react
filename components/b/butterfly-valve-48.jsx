import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axzf4ybwk.css';
import '../../css/o/ox3h7836y.css';
import '../../css/t/tq5ulf4xa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axzf4ybwk"/><path class="ox3h7836y"/><path class="tq5ulf4xa"/>`,
		"fallback": "energy-icons:butterfly-valve-48",
	});
}

export default Component;
