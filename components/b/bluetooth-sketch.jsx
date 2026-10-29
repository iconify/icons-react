import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dnn3nvbzy.css';
import '../../css/x/xuui6fr7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dnn3nvbzy"/><path class="xuui6fr7b"/></g>`,
		"fallback": "withicons:bluetooth-sketch",
	});
}

export default Component;
