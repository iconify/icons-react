import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/we2d1dbtw.css';
import '../../css/i/ijfu_m85q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="we2d1dbtw"/><path class="ijfu_m85q"/></g>`,
		"fallback": "hugeicons:identity-card-check",
	});
}

export default Component;
