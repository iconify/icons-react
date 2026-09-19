import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qqt_n-umm.css';
import '../../css/n/n1libmbqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qqt_n-umm"/><path class="n1libmbqs"/></g>`,
		"fallback": "icon-park-outline:accept-email",
	});
}

export default Component;
