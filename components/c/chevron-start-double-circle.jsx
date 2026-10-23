import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jgv0hqbcf.css';
import '../../css/p/pzugt234v.css';
import '../../css/s/sykwu6bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jgv0hqbcf"/><path class="pzugt234v"/><path class="sykwu6bmj"/></g>`,
		"fallback": "andrsrxn:chevron-start-double-circle",
	});
}

export default Component;
