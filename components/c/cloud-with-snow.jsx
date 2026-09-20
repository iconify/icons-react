import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihurembfg.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/b/bepahm04n.css';
import '../../css/j/jimrxwnfm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihurembfg"/><g class="doj9dq_jg"><path class="bepahm04n"/><path class="jimrxwnfm"/></g>`,
		"fallback": "openmoji:cloud-with-snow",
	});
}

export default Component;
