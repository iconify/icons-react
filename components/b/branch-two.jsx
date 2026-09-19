import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jvyv2ffsv.css';
import '../../css/h/huua5bc4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="jvyv2ffsv"/><path class="huua5bc4g"/></g>`,
		"fallback": "icon-park-solid:branch-two",
	});
}

export default Component;
