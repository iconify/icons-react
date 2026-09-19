import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lwc-i7bqs.css';
import '../../css/y/ysooycc-h.css';
import '../../css/j/jytgr1bls.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="lwc-i7bqs"/><path class="ysooycc-h"/><path class="jytgr1bls"/></g>`,
		"fallback": "icon-park-solid:hamburger",
	});
}

export default Component;
