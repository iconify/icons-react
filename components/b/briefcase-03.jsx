import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qe942ccmo.css';
import '../../css/d/dxiv9v20g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qe942ccmo"/><path class="dxiv9v20g"/></g>`,
		"fallback": "hugeicons:briefcase-03",
	});
}

export default Component;
