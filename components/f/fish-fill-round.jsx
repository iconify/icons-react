import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6i-_ns_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6i-_ns_n"/>`,
		"fallback": "coolicons:fish-fill-round",
	});
}

export default Component;
