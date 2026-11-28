import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0fkrdwdb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ll59ytbdg.css';
import '../../css/r/r7w21kpsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0fkrdwdb secondary"/><g class="dt0cm9dhy primary"><path class="ll59ytbdg"/><path class="r7w21kpsx"/></g>`,
		"fallback": "iconaut:automation-duo",
	});
}

export default Component;
