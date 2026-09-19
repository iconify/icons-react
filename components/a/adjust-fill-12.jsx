import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc-hat22k.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ae87yac1j.css';
import '../../css/g/gh288vdeb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc-hat22k"/><g class="cuyn6tgcc"><circle class="ae87yac1j"/><circle class="gh288vdeb"/></g>`,
		"fallback": "garden:adjust-fill-12",
	});
}

export default Component;
