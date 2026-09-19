import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c-bbc_bpd.css';
import '../../css/c/c5g7-u9cc.css';
import '../../css/l/l54so-d8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c-bbc_bpd"/><path class="c5g7-u9cc"/><path class="l54so-d8u"/></g>`,
		"fallback": "icon-park-outline:bank",
	});
}

export default Component;
