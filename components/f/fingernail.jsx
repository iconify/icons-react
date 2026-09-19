import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nn4_--rny.css';
import '../../css/g/g7qlcfhvp.css';
import '../../css/p/plr7vwr7h.css';
import '../../css/x/x9avr_b1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="nn4_--rny"/><path class="g7qlcfhvp"/><rect class="plr7vwr7h"/><path class="x9avr_b1n"/></g>`,
		"fallback": "icon-park-solid:fingernail",
	});
}

export default Component;
