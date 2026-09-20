import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jcs245bfb.css';
import '../../css/p/plhtj7b7c.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><g class="mc2zb0bvp"><path class="jcs245bfb"/><path class="plhtj7b7c"/></g><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-video-camera-line-duotone",
	});
}

export default Component;
