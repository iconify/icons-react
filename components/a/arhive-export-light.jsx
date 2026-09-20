import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/crhqw7b7l.css';
import '../../css/l/l2a_o6bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="crhqw7b7l"/><path class="l2a_o6bxw"/></g>`,
		"fallback": "lets-icons:arhive-export-light",
	});
}

export default Component;
