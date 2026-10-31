import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnbua4b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnbua4b-v"/>`,
		"fallback": "coolicons:bus-side-round",
	});
}

export default Component;
