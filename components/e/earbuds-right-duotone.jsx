import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cac2avbop.css';
import '../../css/k/ka3skv-fj.css';
import '../../css/t/tzbg7abcv.css';
import '../../css/w/wewkxubqx.css';
import '../../css/h/hjdunxbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cac2avbop"/><path clip-rule="evenodd" class="ka3skv-fj"/><path class="tzbg7abcv"/><path clip-rule="evenodd" class="wewkxubqx"/><path clip-rule="evenodd" class="hjdunxbns"/></g>`,
		"fallback": "reicon:earbuds-right-duotone",
	});
}

export default Component;
