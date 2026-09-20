import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-58jv42n.css';
import '../../css/l/l6k2p9oea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d-58jv42n"/><path class="l6k2p9oea"/></g>`,
		"fallback": "mynaui:ear",
	});
}

export default Component;
