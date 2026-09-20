import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6t39xbyu.css';
import '../../css/n/n-y7t6i4r.css';
import '../../css/j/jzj1j7b_h.css';
import '../../css/q/qwgjhnbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6t39xbyu"/><path class="n-y7t6i4r"/><rect class="jzj1j7b_h"/><rect class="qwgjhnbgj"/></g>`,
		"fallback": "lets-icons:data-bank",
	});
}

export default Component;
