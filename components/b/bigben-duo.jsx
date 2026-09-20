import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zikajmxqo.css';
import '../../css/v/v57_e0bbd.css';
import '../../css/y/yi_qorbbz.css';
import '../../css/y/yt9amce0q.css';
import '../../css/r/r0_dkhe6p.css';
import '../../css/g/g89id020g.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zikajmxqo"><path class="v57_e0bbd"/><path class="yi_qorbbz"/><path class="yt9amce0q"/><path class="r0_dkhe6p"/><path class="g89id020g"/></g>`,
		"fallback": "streamline-stickies-color:bigben-duo",
	});
}

export default Component;
