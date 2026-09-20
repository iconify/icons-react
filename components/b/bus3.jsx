import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uz11obp7m.css';
import '../../css/m/m_k5mi6ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uz11obp7m"/><path class="m_k5mi6ag"/></g>`,
		"fallback": "reicon:bus3",
	});
}

export default Component;
