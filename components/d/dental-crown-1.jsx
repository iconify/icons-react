import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uxxw8pbdr.css';
import '../../css/h/h6mt742yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uxxw8pbdr"/><path class="h6mt742yb"/></g>`,
		"fallback": "streamline-ultimate:dental-crown-1",
	});
}

export default Component;
