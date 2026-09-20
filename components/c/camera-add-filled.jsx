import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hxqc51bii.css';
import '../../css/x/xhj1p_dst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hxqc51bii"/><path class="xhj1p_dst"/></g>`,
		"fallback": "reicon:camera-add-filled",
	});
}

export default Component;
