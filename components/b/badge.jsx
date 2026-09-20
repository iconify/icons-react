import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d0bau10by.css';
import '../../css/i/iczfzybzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d0bau10by"/><circle class="iczfzybzk"/></g>`,
		"fallback": "proicons:badge",
	});
}

export default Component;
