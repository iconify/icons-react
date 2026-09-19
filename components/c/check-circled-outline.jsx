import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/ppttw6btk.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ppttw6btk"/><path class="p9-zrkb4g"/></g>`,
		"fallback": "iconoir:check-circled-outline",
	});
}

export default Component;
