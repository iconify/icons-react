import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bcrdq2e4j.css';
import '../../css/r/rzvku9xgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bcrdq2e4j"/><path class="rzvku9xgd"/></g>`,
		"fallback": "hugeicons:chat-outcome-01",
	});
}

export default Component;
