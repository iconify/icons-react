import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x27ye4o8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x27ye4o8n"/>`,
		"fallback": "reicon:earbuds-case2-filled",
	});
}

export default Component;
