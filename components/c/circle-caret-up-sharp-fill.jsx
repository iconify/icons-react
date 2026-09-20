import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrljmcked.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jrljmcked"/>`,
		"fallback": "keyline-icons:circle-caret-up-sharp-fill",
	});
}

export default Component;
