import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/o477sp5ja.css';
import '../../css/y/y0r_bqb0y.css';
import '../../css/p/p2pks0acd.css';
import '../../css/d/ddjdzib0d.css';
import '../../css/b/bp-k_tjsz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="o477sp5ja"/><rect class="y0r_bqb0y"/><path class="p2pks0acd"/><path class="ddjdzib0d"/><path class="bp-k_tjsz"/></g>`,
		"fallback": "icon-park-outline:hotel",
	});
}

export default Component;
