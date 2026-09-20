import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3mi_ybsx.css';
import '../../css/t/t0r8jch9h.css';
import '../../css/h/hky0ybjra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f3mi_ybsx"/><path class="t0r8jch9h"/><path class="hky0ybjra"/></g>`,
		"fallback": "streamline-ultimate:file-code-check",
	});
}

export default Component;
