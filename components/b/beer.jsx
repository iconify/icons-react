import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/o_47jcb2f.css';
import '../../css/j/jfyalhbxw.css';
import '../../css/v/vvdsu0box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="o_47jcb2f"/><path class="jfyalhbxw"/><path class="vvdsu0box"/></g>`,
		"fallback": "hugeicons:beer",
	});
}

export default Component;
