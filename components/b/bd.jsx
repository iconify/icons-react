import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kb8catbth.css';
import '../../css/i/id1tjk8pm.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kb8catbth"/><circle class="id1tjk8pm"/></g>`,
		"fallback": "cif:bd",
	});
}

export default Component;
