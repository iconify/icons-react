import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwec3fm5u.css';
import '../../css/n/n0vxjezac.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="nwec3fm5u"/><path class="n0vxjezac"/></g>`,
		"fallback": "cryptocurrency-color:gto",
	});
}

export default Component;
