import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/r/rv6d_n19x.css';
import '../../css/b/bq9w9_bee.css';
import '../../css/x/xalxs-y0d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="rv6d_n19x"/><path class="bq9w9_bee"/><path class="xalxs-y0d"/></g>`,
		"fallback": "icon-park:angry-face",
	});
}

export default Component;
