import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pychm_b_c.css';
import '../../css/q/q6jcelbpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="pychm_b_c"/><path class="q6jcelbpp"/></g>`,
		"fallback": "cryptocurrency-color:bela",
	});
}

export default Component;
