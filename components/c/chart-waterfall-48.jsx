import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyyebzbnj.css';
import '../../css/j/jv0n_0n6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyyebzbnj"/><path class="jv0n_0n6m"/>`,
		"fallback": "energy-icons:chart-waterfall-48",
	});
}

export default Component;
