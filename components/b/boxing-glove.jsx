import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg18qdb_c.css';
import '../../css/k/kn_z96blc.css';
import '../../css/r/rfidhbbql.css';
import '../../css/q/q5hz12wnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(-.7863 -.61785 .59169 -.80617 10.17 23)" class="pg18qdb_c"/><path class="kn_z96blc"/><rect transform="matrix(-.7863 -.61785 .59169 -.80617 10.17 23)" class="rfidhbbql"/><path class="q5hz12wnx"/></g>`,
		"fallback": "andrsrxn:boxing-glove",
	});
}

export default Component;
