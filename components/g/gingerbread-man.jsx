import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/ve8e1pbig.css';
import '../../css/q/q9tg-bclv.css';
import '../../css/t/tuhu0nbbx.css';
import '../../css/n/niybyjbpm.css';
import '../../css/q/qtln9nbsk.css';
import '../../css/e/eflprlb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ve8e1pbig wm-k"/><path class="q9tg-bclv wm-k"/><path class="tuhu0nbbx wm-k"/><path class="niybyjbpm wm-k"/><path class="qtln9nbsk wm-shine"/><path class="eflprlb-x wm-a"/></g>`,
		"fallback": "withicons-anime:gingerbread-man",
	});
}

export default Component;
