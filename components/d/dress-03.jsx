import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/is_76wt5m.css';
import '../../css/n/n0m462beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="is_76wt5m"/><path class="n0m462beg"/></g>`,
		"fallback": "hugeicons:dress-03",
	});
}

export default Component;
