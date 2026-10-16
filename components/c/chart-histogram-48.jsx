import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/p/p5z3zvw9z.css';
import '../../css/f/fxqefbc9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="p5z3zvw9z"/><path class="fxqefbc9h"/>`,
		"fallback": "energy-icons:chart-histogram-48",
	});
}

export default Component;
