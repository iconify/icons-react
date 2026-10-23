import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqsw_bp6f.css';
import '../../css/n/nnusg_b2p.css';
import '../../css/f/fbbochbom.css';
import '../../css/e/ekcf3dbxx.css';
import '../../css/r/rap0zcaih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.06 21.23)" class="zqsw_bp6f"/><path class="nnusg_b2p"/><path class="fbbochbom"/><rect transform="matrix(0 -1 -1 0 21.6 21.23)" class="ekcf3dbxx"/><path class="rap0zcaih"/></g>`,
		"fallback": "andrsrxn:fire-alarm",
	});
}

export default Component;
