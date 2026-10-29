import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ha-6yibsf.css';
import '../../css/k/k26yyvc5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ha-6yibsf"/><path class="k26yyvc5e wm-a"/></g>`,
		"fallback": "withicons:footprints",
	});
}

export default Component;
