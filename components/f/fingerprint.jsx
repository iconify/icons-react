import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/em1eecbma.css';
import '../../css/k/ke0058byd.css';
import '../../css/l/l76rhnbaq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="em1eecbma"/><path class="ke0058byd"/><path class="l76rhnbaq"/></g>`,
		"fallback": "icon-park-outline:fingerprint",
	});
}

export default Component;
