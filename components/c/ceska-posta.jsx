import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9g34html.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9g34html"/>`,
		"fallback": "cbi:ceska-posta",
	});
}

export default Component;
