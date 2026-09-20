import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f07shlhtd.css';
import '../../css/u/u_9gx3aby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f07shlhtd"/><path class="u_9gx3aby"/></g>`,
		"fallback": "reicon:gps-slash",
	});
}

export default Component;
