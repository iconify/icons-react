import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wk8escbkh.css';
import '../../css/h/hq2-bgbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wk8escbkh"/><path class="hq2-bgbcf"/></g>`,
		"fallback": "matita:clock",
	});
}

export default Component;
