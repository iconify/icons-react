import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/liv05r6py.css';
import '../../css/t/tbb030bka.css';
import '../../css/b/bkxcgvb4m.css';
import '../../css/r/rsi0hca9w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="liv05r6py"/><path class="tbb030bka"/><path class="bkxcgvb4m"/><path class="rsi0hca9w"/></g>`,
		"fallback": "streamline-color:desktop-help",
	});
}

export default Component;
