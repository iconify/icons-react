import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhhwms9ty.css';
import '../../css/y/yyggsobjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qhhwms9ty"/><path class="yyggsobjx"/></g>`,
		"fallback": "lets-icons:flag-alt-duotone",
	});
}

export default Component;
