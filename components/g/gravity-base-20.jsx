import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opebgib4l.css';
import '../../css/o/o92awt_ps.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opebgib4l"/><path class="o92awt_ps"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:gravity-base-20",
	});
}

export default Component;
