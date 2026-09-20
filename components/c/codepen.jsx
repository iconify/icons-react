import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdr9b6yaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdr9b6yaj"/>`,
		"fallback": "simple-icons:codepen",
	});
}

export default Component;
