import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rzcnkqlmz.css';
import '../../css/w/w6ge37yyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rzcnkqlmz"/><path class="w6ge37yyg wm-a"/></g>`,
		"fallback": "withicons:clipboard-x-solid",
	});
}

export default Component;
