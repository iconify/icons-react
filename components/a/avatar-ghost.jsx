import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v92bq9z-v.css';
import '../../css/u/u2gysevix.css';
import '../../css/m/mpnr6nbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v92bq9z-v"/><path class="u2gysevix"/><path class="mpnr6nbqo"/></g>`,
		"fallback": "withicons-bauhaus:avatar-ghost",
	});
}

export default Component;
