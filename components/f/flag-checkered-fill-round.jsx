import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-k0v_k7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-k0v_k7g"/>`,
		"fallback": "coolicons:flag-checkered-fill-round",
	});
}

export default Component;
