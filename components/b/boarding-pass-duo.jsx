import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zikajmxqo.css';
import '../../css/l/lpwq6acog.css';
import '../../css/d/d9pjsac5k.css';
import '../../css/n/nq_fo1m6t.css';
import '../../css/f/fvmpeubpy.css';
import '../../css/l/l26a8wbtl.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zikajmxqo"><path class="lpwq6acog"/><path class="d9pjsac5k"/><path class="nq_fo1m6t"/><path class="fvmpeubpy"/><path class="l26a8wbtl"/></g>`,
		"fallback": "streamline-stickies-color:boarding-pass-duo",
	});
}

export default Component;
