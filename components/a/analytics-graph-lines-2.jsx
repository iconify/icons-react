import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oy64xf24x.css';
import '../../css/q/q1msbjubp.css';
import '../../css/i/i0ygm8b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oy64xf24x"/><path class="q1msbjubp"/><path class="i0ygm8b-p"/></g>`,
		"fallback": "streamline-ultimate:analytics-graph-lines-2",
	});
}

export default Component;
