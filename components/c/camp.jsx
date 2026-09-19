import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xltgi6s1j.css';
import '../../css/f/f0rmndbzt.css';
import '../../css/o/of8nq_0fv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xltgi6s1j"/><path class="f0rmndbzt"/><path class="of8nq_0fv"/></g>`,
		"fallback": "icon-park-solid:camp",
	});
}

export default Component;
