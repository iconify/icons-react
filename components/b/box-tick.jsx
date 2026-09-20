import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dnrxv30hl.css';
import '../../css/p/pyt2z8_qv.css';
import '../../css/x/xgtgfnecr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dnrxv30hl"/><path class="pyt2z8_qv"/><path class="xgtgfnecr"/></g>`,
		"fallback": "reicon:box-tick",
	});
}

export default Component;
