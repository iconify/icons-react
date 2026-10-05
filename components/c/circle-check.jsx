import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zrjr6yxjm.css';
import '../../css/s/sf4yx8p8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="zrjr6yxjm"/><path class="sf4yx8p8l"/></g>`,
		"fallback": "matita:circle-check",
	});
}

export default Component;
