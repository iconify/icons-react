import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x26afwbqj.css';
import '../../css/y/y5eqi_byt.css';
import '../../css/z/zvmll5bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x26afwbqj"/><path class="y5eqi_byt"/><path class="zvmll5bnx"/></g>`,
		"fallback": "ginetex:drip-flat-drying-in-the-shade",
	});
}

export default Component;
