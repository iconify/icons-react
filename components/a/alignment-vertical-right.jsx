import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/g/g7stp2buu.css';
import '../../css/c/c512wzfmb.css';
import '../../css/t/tp5uhcb_m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="g7stp2buu"/><path class="c512wzfmb"/><path class="tp5uhcb_m"/></g>`,
		"fallback": "icon-park:alignment-vertical-right",
	});
}

export default Component;
