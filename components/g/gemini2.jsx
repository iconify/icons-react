import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h2hc99b6o.css';
import '../../css/q/q38f4vbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h2hc99b6o"/><path class="q38f4vbqi"/></g>`,
		"fallback": "reicon:gemini2",
	});
}

export default Component;
