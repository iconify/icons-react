import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zog1b-bvl.css';
import '../../css/f/fsbpayxoj.css';
import '../../css/a/acdxx4bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zog1b-bvl"/><path class="fsbpayxoj"/><path class="acdxx4bqk"/></g>`,
		"fallback": "pixelarticons:bug-sharp",
	});
}

export default Component;
