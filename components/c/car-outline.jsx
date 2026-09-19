import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy2zf99lb.css';
import '../../css/t/tf5xj-bsz.css';
import '../../css/k/koofvxt_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy2zf99lb"/><circle class="tf5xj-bsz"/><circle class="koofvxt_e"/>`,
		"fallback": "famicons:car-outline",
	});
}

export default Component;
