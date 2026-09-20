import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx251zbnn.css';
import '../../css/p/pr1ptmzlj.css';
import '../../css/k/ks9331tco.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="yx251zbnn"/><path class="pr1ptmzlj"/><path class="ks9331tco"/></g>`,
		"fallback": "skill-icons:html",
	});
}

export default Component;
