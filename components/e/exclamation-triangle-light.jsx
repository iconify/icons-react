import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv8-yz4el.css';
import '../../css/j/jvw8zwcpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv8-yz4el"/><path clip-rule="evenodd" class="jvw8zwcpr"/>`,
		"fallback": "stash:exclamation-triangle-light",
	});
}

export default Component;
