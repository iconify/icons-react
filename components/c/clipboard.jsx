import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/kkl7zo0la.css';
import '../../css/d/dbgiium2z.css';
import '../../css/q/qed7hpbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="kkl7zo0la"/><path class="dbgiium2z"/><path class="qed7hpbeg"/></g>`,
		"fallback": "akar-icons:clipboard",
	});
}

export default Component;
