import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcc50sb7a.css';
import '../../css/o/od2-gdbso.css';
import '../../css/e/esc0vsbcl.css';
import '../../css/v/vc-7i1ihb.css';
import '../../css/g/gj5k14bhp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wcc50sb7a"><rect class="od2-gdbso"/><rect class="esc0vsbcl"/><rect class="vc-7i1ihb"/><rect class="gj5k14bhp"/></g>`,
		"fallback": "glyphs:ellipsis-square-bold",
	});
}

export default Component;
