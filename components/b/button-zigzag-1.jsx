import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kes-_rdjt.css';
import '../../css/y/yu4t5mnyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kes-_rdjt"/><path class="yu4t5mnyo"/></g>`,
		"fallback": "streamline-ultimate:button-zigzag-1",
	});
}

export default Component;
