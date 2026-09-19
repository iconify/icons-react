import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t-gk3bcjc.css';
import '../../css/e/eyb2l3b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t-gk3bcjc"/><path class="eyb2l3b4c"/></g>`,
		"fallback": "hugeicons:file-check-corner",
	});
}

export default Component;
