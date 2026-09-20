import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zfnk77btx.css';
import '../../css/m/mxiripbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zfnk77btx"/><path class="mxiripbwq"/></g>`,
		"fallback": "mage:file-2",
	});
}

export default Component;
