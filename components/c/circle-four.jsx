import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/ek039kbmo.css';
import '../../css/t/th81deifi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="ek039kbmo"/><path class="th81deifi"/></g>`,
		"fallback": "icon-park-outline:circle-four",
	});
}

export default Component;
