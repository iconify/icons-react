import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nopuubb8w.css';
import '../../css/x/xke9tubde.css';
import '../../css/c/c86udab-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nopuubb8w"/><path class="xke9tubde"/><path class="c86udab-t"/></g>`,
		"fallback": "hugeicons:bitcoin-location",
	});
}

export default Component;
