import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ehp363b1u.css';
import '../../css/n/n69jpl95o.css';
import '../../css/p/pna1nobrc.css';
import '../../css/k/k6bb63bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ehp363b1u"/><path class="n69jpl95o"/><path class="pna1nobrc"/><path class="k6bb63bll"/></g>`,
		"fallback": "iconoir:bbq",
	});
}

export default Component;
