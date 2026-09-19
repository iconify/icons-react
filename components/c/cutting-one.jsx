import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xt6hc6emd.css';
import '../../css/h/hq6s1abpk.css';
import '../../css/u/u4vnq1bcb.css';
import '../../css/n/ngr-1z1cz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="xt6hc6emd"/><path class="hq6s1abpk"/><path class="u4vnq1bcb"/><path class="ngr-1z1cz"/></g>`,
		"fallback": "icon-park:cutting-one",
	});
}

export default Component;
