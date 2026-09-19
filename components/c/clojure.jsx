import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gba9uc44c.css';
import '../../css/g/glxbdplyh.css';
import '../../css/g/guv2-nbpq.css';
import '../../css/s/su6ajm_aq.css';
import '../../css/l/lz0zevbvx.css';
import '../../css/c/c8r6cbcnm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gba9uc44c"/><path class="glxbdplyh"/><path class="guv2-nbpq"/><path class="su6ajm_aq"/><path class="lz0zevbvx"/><path class="c8r6cbcnm"/></g>`,
		"fallback": "catppuccin:clojure",
	});
}

export default Component;
