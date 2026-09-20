import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxz9-bb7g.css';
import '../../css/v/vyd5slb5p.css';
import '../../css/f/f3mi_ybsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yxz9-bb7g"/><path class="vyd5slb5p"/><path class="f3mi_ybsx"/></g>`,
		"fallback": "streamline-ultimate:earth-cash",
	});
}

export default Component;
