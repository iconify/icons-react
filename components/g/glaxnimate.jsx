import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el5krsbzi.css';
import '../../css/r/r_xmipeoc.css';
import '../../css/i/i23tqphhu.css';
import '../../css/e/edxstybzy.css';
import '../../css/o/or-k32bku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 -161.533)" class="el5krsbzi"><path class="r_xmipeoc"/><path class="i23tqphhu"/><circle class="edxstybzy"/><circle class="or-k32bku"/></g>`,
		"fallback": "thesvg-color:glaxnimate",
	});
}

export default Component;
