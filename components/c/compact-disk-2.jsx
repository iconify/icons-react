import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/a07m10b6a.css';
import '../../css/c/cry743bec.css';
import '../../css/v/vp52robvj.css';
import '../../css/w/wvwbcz5yh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="a07m10b6a"/><path class="cry743bec"/><path class="vp52robvj"/><path class="wvwbcz5yh"/></g>`,
		"fallback": "marketeq:compact-disk-2",
	});
}

export default Component;
