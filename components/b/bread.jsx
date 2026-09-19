import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohqr0kb7r.css';
import '../../css/e/eivig8z_t.css';
import '../../css/p/pln1t8f_n.css';
import '../../css/w/wh8zg4byf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ohqr0kb7r"/><path class="eivig8z_t"/><path class="pln1t8f_n"/><path class="wh8zg4byf"/></g>`,
		"fallback": "fluent-emoji-flat:bread",
	});
}

export default Component;
