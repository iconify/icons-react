import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zx62dabaj.css';
import '../../css/j/j5qsj4bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zx62dabaj"/><path class="j5qsj4bjv"/></g>`,
		"fallback": "streamline-ultimate:computer-chip-32",
	});
}

export default Component;
