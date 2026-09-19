import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/di72bv0yj.css';
import '../../css/c/c8h0bxbtq.css';
import '../../css/q/qfxalsbxq.css';
import '../../css/j/jaoqwr_ai.css';
import '../../css/l/lo2z8bp4b.css';
import '../../css/s/sfs98y94q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="di72bv0yj"/><path class="c8h0bxbtq"/><path class="qfxalsbxq"/><path class="jaoqwr_ai"/><path class="lo2z8bp4b"/><path class="sfs98y94q"/></g>`,
		"fallback": "icon-park-solid:cake-five",
	});
}

export default Component;
