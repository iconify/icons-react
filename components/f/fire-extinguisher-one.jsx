import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f7eqgsbzj.css';
import '../../css/p/pot_04b4h.css';
import '../../css/f/ff2lwxprz.css';
import '../../css/j/jtilm806p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="f7eqgsbzj"/><path class="pot_04b4h"/><path class="ff2lwxprz"/><path class="jtilm806p"/></g>`,
		"fallback": "icon-park-outline:fire-extinguisher-one",
	});
}

export default Component;
