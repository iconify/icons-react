import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7uw_y9fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h7uw_y9fk"/>`,
		"fallback": "mingcute:classify-ai-fill",
	});
}

export default Component;
