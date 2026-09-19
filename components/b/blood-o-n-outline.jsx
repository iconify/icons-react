import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h4fyadbly.css';
import '../../css/y/yghz7cc0o.css';
import '../../css/h/h0i813b-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h4fyadbly"/><path class="yghz7cc0o"/><path clip-rule="evenodd" class="h0i813b-n"/></g>`,
		"fallback": "healthicons:blood-o-n-outline",
	});
}

export default Component;
