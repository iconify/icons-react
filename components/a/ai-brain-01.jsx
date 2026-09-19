import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc4n74b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc4n74b5n"/>`,
		"fallback": "hugeicons:ai-brain-01",
	});
}

export default Component;
