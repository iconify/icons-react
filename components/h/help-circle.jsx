import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp9q_3bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jp9q_3bhv"/>`,
		"fallback": "griddy-icons:help-circle",
	});
}

export default Component;
