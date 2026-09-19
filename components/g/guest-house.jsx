import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ciqv12bmg.css';
import '../../css/e/ef1rc2jqc.css';
import '../../css/n/ns-gq3fvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ciqv12bmg"/><path class="ef1rc2jqc"/><path class="ns-gq3fvg"/></g>`,
		"fallback": "hugeicons:guest-house",
	});
}

export default Component;
