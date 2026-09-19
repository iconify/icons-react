import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6v3txboo.css';
import '../../css/d/d4os5vbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r6v3txboo"/><path class="d4os5vbjv"/></g>`,
		"fallback": "hugeicons:book-down",
	});
}

export default Component;
