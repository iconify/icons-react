import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv-ktibnd.css';
import '../../css/u/udjpuqbtv.css';
import '../../css/e/edc8sgbjx.css';
import '../../css/v/vb66a7l1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pv-ktibnd"/><path class="udjpuqbtv"/><circle class="edc8sgbjx"/><path class="vb66a7l1z"/></g>`,
		"fallback": "icon-park-outline:data-user",
	});
}

export default Component;
