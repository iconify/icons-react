import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/e/emm41fcru.css';
import '../../css/o/obsyh9bsw.css';
import '../../css/x/x_uin3y0r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="emm41fcru"/><path class="obsyh9bsw"/><path class="x_uin3y0r"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-monocle",
	});
}

export default Component;
