import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/e/eqbz-wbsh.css';
import '../../css/i/ig236ibqn.css';
import '../../css/c/cu7xy9b9y.css';
import '../../css/j/jotpxq6-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="eqbz-wbsh"/><path class="ig236ibqn"/><path class="cu7xy9b9y"/><path class="jotpxq6-n"/></g>`,
		"fallback": "solar:hiking-round-linear",
	});
}

export default Component;
