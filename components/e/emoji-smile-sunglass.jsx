import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux_-a_76x.css';
import '../../css/h/hdul03-0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux_-a_76x"/><path clip-rule="evenodd" class="hdul03-0f"/>`,
		"fallback": "lineicons:emoji-smile-sunglass",
	});
}

export default Component;
