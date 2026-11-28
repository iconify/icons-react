import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3x45msta.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m0ucqz9kr.css';
import '../../css/e/emdpkhv1c.css';
import '../../css/r/rqhxtipmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3x45msta secondary"/><g class="dt0cm9dhy primary"><path class="m0ucqz9kr"/><path class="emdpkhv1c"/><path class="rqhxtipmw"/></g>`,
		"fallback": "iconaut:input-sparkles-duo",
	});
}

export default Component;
