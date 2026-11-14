import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/idhzit1_z.css';
import '../../css/z/zxw0ofxyz.css';
import '../../css/n/nt3ymrbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="idhzit1_z"/><path class="zxw0ofxyz"/><path class="nt3ymrbmn"/></g>`,
		"fallback": "hugeicons:analytics-up",
	});
}

export default Component;
