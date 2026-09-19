import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gv48cybdb.css';
import '../../css/z/zx_m11buq.css';
import '../../css/s/ss02hqq4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gv48cybdb"/><path class="zx_m11buq"/><path class="ss02hqq4i"/></g>`,
		"fallback": "hugeicons:domino",
	});
}

export default Component;
