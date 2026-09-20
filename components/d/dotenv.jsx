import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm3qzydqs.css';
import '../../css/y/yb0_9vbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm3qzydqs"/><path class="yb0_9vbsx"/>`,
		"fallback": "thesvg-color:dotenv",
	});
}

export default Component;
