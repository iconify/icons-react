import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tj3g9kbrn.css';
import '../../css/p/p5_0fhvlg.css';
import '../../css/m/mgtgnwboj.css';
import '../../css/i/i7pk32q9v.css';
import '../../css/f/fwniy0djt.css';
import '../../css/g/gj9uzmbvg.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tj3g9kbrn"/><path class="p5_0fhvlg"/><path class="mgtgnwboj"/><path class="i7pk32q9v"/><path class="fwniy0djt"/><path class="gj9uzmbvg"/></g>`,
		"fallback": "streamline-stickies-color:ghost",
	});
}

export default Component;
