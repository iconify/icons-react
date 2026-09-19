import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qi070ob_z.css';
import '../../css/k/ky2qzacku.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qi070ob_z"/><path class="ky2qzacku"/></g>`,
		"fallback": "cryptocurrency-color:bpt",
	});
}

export default Component;
