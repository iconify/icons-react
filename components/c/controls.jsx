import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/akwolfbei.css';
import '../../css/m/m8ds2xbvu.css';
import '../../css/p/pfcxgibkx.css';
import '../../css/d/dtnmf3bzb.css';
import '../../css/x/xrr1tdb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 8.98 7.88)" class="akwolfbei"/><circle transform="matrix(0 1 1 0 12.23 13.33)" class="m8ds2xbvu"/><path class="pfcxgibkx"/><circle transform="rotate(90 8.98 7.88)" class="dtnmf3bzb"/><circle transform="matrix(0 1 1 0 12.23 13.33)" class="xrr1tdb1m"/></g>`,
		"fallback": "andrsrxn:controls",
	});
}

export default Component;
