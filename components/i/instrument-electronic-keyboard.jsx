import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxcyswb1d.css';
import '../../css/n/ndsn13p7t.css';
import '../../css/e/e2b_iy-oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxcyswb1d"/><path class="ndsn13p7t"/><path class="e2b_iy-oc"/>`,
		"fallback": "streamline-freehand:instrument-electronic-keyboard",
	});
}

export default Component;
