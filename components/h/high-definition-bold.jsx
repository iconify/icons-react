import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ory_b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7ory_b6w"/>`,
		"fallback": "solar:high-definition-bold",
	});
}

export default Component;
