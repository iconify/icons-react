import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/en6u7tb_t.css';
import '../../css/k/kxkh43bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="en6u7tb_t"/><path class="kxkh43bgj"/></g>`,
		"fallback": "hugeicons:home-12",
	});
}

export default Component;
