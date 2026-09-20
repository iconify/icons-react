import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/ham-wqb_z.css';
import '../../css/d/dwhsjmobk.css';
import '../../css/z/z6re8rbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ham-wqb_z"/><path class="dwhsjmobk"/><path class="z6re8rbyg"/></g>`,
		"fallback": "reicon:bucket-square",
	});
}

export default Component;
