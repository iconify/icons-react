import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r7wjyvbxh.css';
import '../../css/s/s8g65hbry.css';
import '../../css/c/ch6gofp9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r7wjyvbxh"/><path class="s8g65hbry"/><path class="ch6gofp9q"/></g>`,
		"fallback": "andrsrxn:currency-pab",
	});
}

export default Component;
