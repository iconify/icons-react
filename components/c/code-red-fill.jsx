import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gka0e7bkk.css';
import '../../css/j/jwwb_xbwf.css';
import '../../css/q/qactrua6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGxpYCFGrY" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="gka0e7bkk"/><stop offset=".5" class="gka0e7bkk"/><stop offset="1" class="jwwb_xbwf"/></linearGradient></defs><path fill="url(#SVGxpYCFGrY)" class="qactrua6e"/>`,
		"fallback": "meteocons:code-red-fill",
	});
}

export default Component;
