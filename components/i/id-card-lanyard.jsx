import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqvb99byo.css';
import '../../css/c/c73e0yd1g.css';
import '../../css/r/rp2ocszvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hqvb99byo"/><path class="c73e0yd1g"/><path class="rp2ocszvz"/></g>`,
		"fallback": "hugeicons:id-card-lanyard",
	});
}

export default Component;
