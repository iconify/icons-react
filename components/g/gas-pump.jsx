import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/grqj15bkb.css';
import '../../css/k/k5w-56bxk.css';
import '../../css/d/df1a4kbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="grqj15bkb"/><path class="k5w-56bxk"/><path class="df1a4kbkn"/></g>`,
		"fallback": "reicon:gas-pump",
	});
}

export default Component;
