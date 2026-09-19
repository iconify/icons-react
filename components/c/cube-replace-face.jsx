import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/de6dedcci.css';
import '../../css/e/efocz0b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="de6dedcci"/><path class="efocz0b-h"/></g>`,
		"fallback": "iconoir:cube-replace-face",
	});
}

export default Component;
