import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8kuw0sgj.css';
import '../../css/x/xvcvrib9a.css';
import '../../css/d/dzs1hp7am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j8kuw0sgj"/><path class="xvcvrib9a"/><path clip-rule="evenodd" class="dzs1hp7am"/></g>`,
		"fallback": "solar:expressionless-square-outline",
	});
}

export default Component;
