import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajkjnyfua.css';
import '../../css/a/atu155_sz.css';
import '../../css/k/k8ybt-i3o.css';
import '../../css/o/ov_am2bxb.css';

const viewBox = {"width":600,"height":600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajkjnyfua"/><path class="atu155_sz"/><path class="k8ybt-i3o"/><path class="ov_am2bxb"/></g>`,
		"fallback": "thesvg-color:firebase",
	});
}

export default Component;
