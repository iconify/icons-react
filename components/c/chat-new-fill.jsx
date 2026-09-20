import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nua2v_4eo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nua2v_4eo"/>`,
		"fallback": "ri:chat-new-fill",
	});
}

export default Component;
