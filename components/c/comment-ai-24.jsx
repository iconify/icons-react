import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx9y36b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx9y36b8n"/>`,
		"fallback": "octicon:comment-ai-24",
	});
}

export default Component;
