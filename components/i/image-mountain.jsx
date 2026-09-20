import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_be_y5vp.css';
import '../../css/d/dntzhubbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h_be_y5vp"/><circle class="dntzhubbj"/></g>`,
		"fallback": "reicon:image-mountain",
	});
}

export default Component;
