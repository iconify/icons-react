import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aqa5dpbyw.css';
import '../../css/y/y3-2rob4h.css';
import '../../css/r/r_pad0b5k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="aqa5dpbyw"/><path class="y3-2rob4h"/><path class="r_pad0b5k"/></g>`,
		"fallback": "icon-park-outline:change",
	});
}

export default Component;
