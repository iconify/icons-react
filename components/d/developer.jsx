import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b3t75y80o.css';
import '../../css/b/bp4g3ft0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b3t75y80o"/><path class="bp4g3ft0z"/></g>`,
		"fallback": "iconoir:developer",
	});
}

export default Component;
