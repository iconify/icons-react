import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osq3ckenx.css';
import '../../css/h/hyystbc4j.css';
import '../../css/e/emip_1b-v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="osq3ckenx"/><path class="hyystbc4j"/><path class="emip_1b-v"/></g>`,
		"fallback": "bi:backpack2",
	});
}

export default Component;
