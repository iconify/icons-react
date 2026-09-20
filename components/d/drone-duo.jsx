import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-he7sx0i.css';
import '../../css/g/g-90eibur.css';
import '../../css/o/o0um1n4go.css';
import '../../css/b/bvq42wzon.css';
import '../../css/l/l8imogb4t.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-he7sx0i"/><path class="g-90eibur"/><path class="o0um1n4go"/><path class="bvq42wzon"/><path class="l8imogb4t"/></g>`,
		"fallback": "streamline-stickies-color:drone-duo",
	});
}

export default Component;
