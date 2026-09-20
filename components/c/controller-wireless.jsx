import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg9l32bmd.css';
import '../../css/u/ub-uf9b8i.css';
import '../../css/k/koo5vibpu.css';
import '../../css/y/y7c0jrb6j.css';
import '../../css/p/p64pu9bhs.css';
import '../../css/s/sdvwlbcfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pg9l32bmd"/><path class="ub-uf9b8i"/><path class="koo5vibpu"/><path class="y7c0jrb6j"/><path class="p64pu9bhs"/><path class="sdvwlbcfr"/></g>`,
		"fallback": "streamline-cyber-color:controller-wireless",
	});
}

export default Component;
