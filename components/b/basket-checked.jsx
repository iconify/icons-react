import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m74xgb3es.css';
import '../../css/x/x1y1bjbwh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="m74xgb3es"/><path class="x1y1bjbwh"/></g>`,
		"fallback": "si-glyph:basket-checked",
	});
}

export default Component;
