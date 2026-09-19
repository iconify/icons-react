import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbr_dz7cx.css';
import '../../css/q/q8pmglblu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbr_dz7cx"/><path class="q8pmglblu"/>`,
		"fallback": "carbon:checkmark-filled",
	});
}

export default Component;
