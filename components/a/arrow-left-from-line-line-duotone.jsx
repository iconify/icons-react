import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/puolaabmm.css';
import '../../css/f/f03dsgbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="puolaabmm"/><path class="f03dsgbnj"/></g>`,
		"fallback": "solar:arrow-left-from-line-line-duotone",
	});
}

export default Component;
