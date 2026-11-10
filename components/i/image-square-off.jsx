import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2qqm-b8j.css';
import '../../css/p/pe546xbff.css';
import '../../css/r/reyjw4bwg.css';
import '../../css/y/ykktmz-uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i2qqm-b8j"/><path class="pe546xbff"/><path class="reyjw4bwg"/><path class="ykktmz-uv"/></g>`,
		"fallback": "andrsrxn:image-square-off",
	});
}

export default Component;
