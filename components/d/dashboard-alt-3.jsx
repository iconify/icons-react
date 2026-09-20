import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m9x-p4bjq.css';
import '../../css/g/gl2am2rzm.css';
import '../../css/j/j1e4dtgim.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="m9x-p4bjq"/><path class="gl2am2rzm"/><path class="j1e4dtgim"/></g>`,
		"fallback": "marketeq:dashboard-alt-3",
	});
}

export default Component;
