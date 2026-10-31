import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/towhhu73f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="towhhu73f"/>`,
		"fallback": "coolicons:behance-fill-round",
	});
}

export default Component;
