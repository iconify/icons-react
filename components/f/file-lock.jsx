import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tvbr56bhx.css';
import '../../css/x/x8w1p98rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tvbr56bhx"/><path class="x8w1p98rx"/></g>`,
		"fallback": "hugeicons:file-lock",
	});
}

export default Component;
