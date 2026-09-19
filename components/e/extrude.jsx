import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/elrykkaqu.css';
import '../../css/q/q7am3ac6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="elrykkaqu"/><path class="q7am3ac6f"/></g>`,
		"fallback": "iconoir:extrude",
	});
}

export default Component;
