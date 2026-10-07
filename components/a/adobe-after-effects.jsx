import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tllrkkbnh.css';
import '../../css/r/r50yp6b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tllrkkbnh"/><path class="r50yp6b4c"/></g>`,
		"fallback": "iconoir:adobe-after-effects",
	});
}

export default Component;
