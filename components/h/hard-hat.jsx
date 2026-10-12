import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eh5atab4m.css';
import '../../css/v/v_185udkc.css';
import '../../css/q/qumx1m0aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eh5atab4m"/><rect transform="rotate(90 22.28 14.9)" class="v_185udkc"/><path class="qumx1m0aw"/></g>`,
		"fallback": "andrsrxn:hard-hat",
	});
}

export default Component;
