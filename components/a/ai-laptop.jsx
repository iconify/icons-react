import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al8ow2q9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al8ow2q9z"/>`,
		"fallback": "hugeicons:ai-laptop",
	});
}

export default Component;
