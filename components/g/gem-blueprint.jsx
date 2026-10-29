import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/flj5rtb4q.css';
import '../../css/v/v8b25pxen.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/tv8x5d72f.css';
import '../../css/h/hm-_8ybly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="flj5rtb4q wm-deco"/><path class="v8b25pxen wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="tv8x5d72f"/><path class="hm-_8ybly"/></g>`,
		"fallback": "withicons:gem-blueprint",
	});
}

export default Component;
