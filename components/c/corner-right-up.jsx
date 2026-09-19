import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t4rb9370j.css';
import '../../css/z/zr_dd8ohf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="t4rb9370j"/><path class="zr_dd8ohf"/></g>`,
		"fallback": "icon-park-outline:corner-right-up",
	});
}

export default Component;
