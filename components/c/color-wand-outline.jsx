import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/far_cdbom.css';
import '../../css/v/vmzs2cilw.css';
import '../../css/r/rfghtubvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="rotate(-45 312.002 311.994)" class="far_cdbom"/><path class="vmzs2cilw"/><path class="rfghtubvr"/>`,
		"fallback": "famicons:color-wand-outline",
	});
}

export default Component;
