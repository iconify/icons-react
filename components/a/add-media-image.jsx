import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oh_1-ibvf.css';
import '../../css/j/jz-bisbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oh_1-ibvf"/><path class="jz-bisbtx"/></g>`,
		"fallback": "iconoir:add-media-image",
	});
}

export default Component;
