import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wjgs2jefc.css';
import '../../css/o/oxi-i2u-e.css';
import '../../css/w/wkrg20bhl.css';
import '../../css/s/st6milb8r.css';
import '../../css/h/h_t9xdbnh.css';
import '../../css/z/zn8884bhl.css';
import '../../css/o/o6dxw7-up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wjgs2jefc"/><path class="oxi-i2u-e"/><path class="wkrg20bhl"/><path class="st6milb8r"/><path class="h_t9xdbnh"/><path class="zn8884bhl"/><path class="o6dxw7-up"/></g>`,
		"fallback": "iconaut:brain",
	});
}

export default Component;
