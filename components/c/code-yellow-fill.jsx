import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpont7bcl.css';
import '../../css/l/litqmtb2x.css';
import '../../css/h/hpoct_rnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGrE4WgcpM" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="lpont7bcl"/><stop offset=".5" class="lpont7bcl"/><stop offset="1" class="litqmtb2x"/></linearGradient></defs><path fill="url(#SVGrE4WgcpM)" class="hpoct_rnw"/>`,
		"fallback": "meteocons:code-yellow-fill",
	});
}

export default Component;
