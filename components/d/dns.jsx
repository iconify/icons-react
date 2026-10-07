import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a266c5e5w.css';
import '../../css/h/h1tri832r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a266c5e5w"/><path class="h1tri832r"/></g>`,
		"fallback": "iconoir:dns",
	});
}

export default Component;
