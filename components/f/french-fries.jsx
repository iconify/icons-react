import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvl0g4b9l.css';
import '../../css/t/t0smhdcbb.css';
import '../../css/y/ydr0iqjof.css';
import '../../css/w/wmz1arb3x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvl0g4b9l"/><path class="t0smhdcbb"/><path class="ydr0iqjof"/><path class="wmz1arb3x"/>`,
		"fallback": "openmoji:french-fries",
	});
}

export default Component;
