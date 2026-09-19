import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nw05-9z2h.css';
import '../../css/a/a9echabsq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="nw05-9z2h"/><path class="a9echabsq"/></g>`,
		"fallback": "cryptocurrency-color:ilk",
	});
}

export default Component;
