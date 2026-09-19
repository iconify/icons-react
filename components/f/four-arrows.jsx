import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uj5tubcvw.css';
import '../../css/j/jb5_c0nah.css';
import '../../css/q/qsirhpcjy.css';
import '../../css/u/uce_dv5xt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="uj5tubcvw"/><path class="jb5_c0nah"/><path class="qsirhpcjy"/><path class="uce_dv5xt"/></g>`,
		"fallback": "icon-park-solid:four-arrows",
	});
}

export default Component;
