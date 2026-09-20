import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d29v1oboa.css';
import '../../css/f/f4bf198co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d29v1oboa"/><path class="f4bf198co"/></g>`,
		"fallback": "reicon:creative-commons",
	});
}

export default Component;
