import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u21n7izaj.css';
import '../../css/q/q4yoju3eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u21n7izaj"/><path class="q4yoju3eg"/></g>`,
		"fallback": "streamline-sharp-color:clean-broom-wipe-flat",
	});
}

export default Component;
