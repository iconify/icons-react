import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xilpkgb-k.css';
import '../../css/i/ian6bfbdt.css';
import '../../css/t/t-jez5b4a.css';
import '../../css/v/vs5vt__md.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/ljehdzx8g.css';
import '../../css/o/om-nr2bkh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xilpkgb-k"/><path class="ian6bfbdt"/><path class="t-jez5b4a"/><path class="vs5vt__md"/><g class="ij2x_72vy"><path class="ljehdzx8g"/><path class="om-nr2bkh"/></g>`,
		"fallback": "openmoji:beach-with-umbrella",
	});
}

export default Component;
