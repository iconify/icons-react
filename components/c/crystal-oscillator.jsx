import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmsca0q7w.css';
import '../../css/f/fsonjcf5w.css';
import '../../css/q/qpqzmgbts.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmsca0q7w"/><path class="fsonjcf5w"/><path class="qpqzmgbts"/>`,
		"fallback": "flat-color-icons:crystal-oscillator",
	});
}

export default Component;
