import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/a4fdwuw2l.css';
import '../../css/q/qjeqtgb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="a4fdwuw2l"/><path class="qjeqtgb_d"/></g>`,
		"fallback": "humbleicons:flag",
	});
}

export default Component;
