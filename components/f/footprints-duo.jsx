import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yyswddp1t.css';
import '../../css/k/k26yyvc5e.css';
import '../../css/h/ha-6yibsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yyswddp1t"/><path class="k26yyvc5e wm-a"/><path class="ha-6yibsf"/></g>`,
		"fallback": "withicons:footprints-duo",
	});
}

export default Component;
