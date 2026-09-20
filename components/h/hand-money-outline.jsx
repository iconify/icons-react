import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjsswl0up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bjsswl0up"/>`,
		"fallback": "solar:hand-money-outline",
	});
}

export default Component;
