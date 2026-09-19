import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsb6hmlbe.css';
import '../../css/d/d93veeb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qsb6hmlbe"/><path class="d93veeb9s"/></g>`,
		"fallback": "iconoir:face-3d-draft",
	});
}

export default Component;
