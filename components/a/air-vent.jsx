import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n871i9plu.css';
import '../../css/f/f4dmwq0uv.css';
import '../../css/t/t7t6x3bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n871i9plu"/><path class="f4dmwq0uv"/><path class="t7t6x3bva"/></g>`,
		"fallback": "withicons-bauhaus:air-vent",
	});
}

export default Component;
