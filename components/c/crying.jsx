import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n64j4pszt.css';
import '../../css/d/dug6n4miq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n64j4pszt"/><path class="dug6n4miq"/></g>`,
		"fallback": "hugeicons:crying",
	});
}

export default Component;
