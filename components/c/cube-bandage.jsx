import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pg79wutcm.css';
import '../../css/z/zzpju5bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pg79wutcm"/><path class="zzpju5bqp"/></g>`,
		"fallback": "iconoir:cube-bandage",
	});
}

export default Component;
