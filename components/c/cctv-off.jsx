import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uevo5ebgk.css';
import '../../css/i/i5phzmqdh.css';
import '../../css/g/gvrjuabrt.css';
import '../../css/b/bfxfvsb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uevo5ebgk"/><path class="i5phzmqdh"/><path class="gvrjuabrt"/><path class="bfxfvsb6g"/></g>`,
		"fallback": "andrsrxn:cctv-off",
	});
}

export default Component;
