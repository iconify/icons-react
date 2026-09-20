import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr9ce2-6g.css';
import '../../css/m/mke14_-qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xr9ce2-6g"/><path class="mke14_-qz"/></g>`,
		"fallback": "streamline-ultimate:garbage-bin",
	});
}

export default Component;
