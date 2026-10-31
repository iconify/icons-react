import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsh8bwo5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsh8bwo5w"/>`,
		"fallback": "coolicons:bookmark-off-fill-round",
	});
}

export default Component;
