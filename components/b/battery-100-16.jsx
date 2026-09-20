import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffaginb4b.css';
import '../../css/i/i1z3osb_g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffaginb4b"/><path class="i1z3osb_g"/>`,
		"fallback": "qlementine-icons:battery-100-16",
	});
}

export default Component;
