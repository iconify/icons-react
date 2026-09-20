import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qmdm9dbkl.css';
import '../../css/u/u0va5cb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qmdm9dbkl"/><path class="u0va5cb5e"/></g>`,
		"fallback": "reicon:circle-compose",
	});
}

export default Component;
