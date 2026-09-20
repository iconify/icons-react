import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/liv05r6py.css';
import '../../css/t/tbb030bka.css';
import '../../css/n/nrvdjxbgs.css';
import '../../css/v/v_mqycebd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="liv05r6py"/><path class="tbb030bka"/><path class="nrvdjxbgs"/><path class="v_mqycebd"/></g>`,
		"fallback": "streamline-color:desktop-game",
	});
}

export default Component;
