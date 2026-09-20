import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wh_jt-b5n.css';
import '../../css/e/el5a-ybcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wh_jt-b5n"/><path class="el5a-ybcx"/></g>`,
		"fallback": "reicon:group5-filled",
	});
}

export default Component;
