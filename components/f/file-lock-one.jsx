import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/k/kc_xdkaqz.css';
import '../../css/q/qni72ecbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="m3rbq0wjz"/><path class="kc_xdkaqz"/><path class="qni72ecbz"/></g>`,
		"fallback": "icon-park-solid:file-lock-one",
	});
}

export default Component;
