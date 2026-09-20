import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkamgcw4g.css';
import '../../css/z/zqjjo1bmk.css';
import '../../css/v/vdzzd91wl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkamgcw4g"/><path class="zqjjo1bmk"/><path class="vdzzd91wl"/></g>`,
		"fallback": "streamline-color:heart-rate-search",
	});
}

export default Component;
