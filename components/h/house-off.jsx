import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogi9kccjs.css';
import '../../css/v/v6hk-smwq.css';
import '../../css/r/rps7xqvtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ogi9kccjs"/><path class="v6hk-smwq"/><path class="rps7xqvtn"/></g>`,
		"fallback": "andrsrxn:house-off",
	});
}

export default Component;
