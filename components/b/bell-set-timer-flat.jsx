import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u7f03zw1z.css';
import '../../css/m/m7w93v-un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u7f03zw1z"/><path class="m7w93v-un"/></g>`,
		"fallback": "streamline-sharp-color:bell-set-timer-flat",
	});
}

export default Component;
