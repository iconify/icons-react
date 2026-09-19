import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w03k3lx1a.css';
import '../../css/v/vxglll9ye.css';
import '../../css/c/cg_rivb6f.css';
import '../../css/o/o9p5qc71t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="w03k3lx1a"/><path class="vxglll9ye"/><path class="cg_rivb6f"/><path class="o9p5qc71t"/></g>`,
		"fallback": "icon-park:clothes-cardigan",
	});
}

export default Component;
