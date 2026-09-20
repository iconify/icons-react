import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j3mxu0gkw.css';
import '../../css/s/sgkyp9ubj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j3mxu0gkw"/><path class="sgkyp9ubj"/></g>`,
		"fallback": "streamline-ultimate:blood-drop",
	});
}

export default Component;
