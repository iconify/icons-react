import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l7-q7ybtu.css';
import '../../css/k/k9_v2nbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l7-q7ybtu"/><path class="k9_v2nbgk"/></g>`,
		"fallback": "reicon:glass",
	});
}

export default Component;
