import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evk_kce9u.css';
import '../../css/e/ee6uw81ab.css';
import '../../css/u/u1mrubb1m.css';
import '../../css/n/nyiqcbxve.css';
import '../../css/a/a40_b9b1p.css';
import '../../css/l/l2bretbpl.css';
import '../../css/l/lvqmwxbid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="evk_kce9u"/><path class="ee6uw81ab"/><path class="u1mrubb1m"/><path class="nyiqcbxve"/><path class="a40_b9b1p"/><path class="l2bretbpl"/><path class="lvqmwxbid"/></g>`,
		"fallback": "icon-park:elevator",
	});
}

export default Component;
