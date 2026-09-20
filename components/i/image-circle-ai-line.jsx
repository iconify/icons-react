import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt5x5sxcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt5x5sxcg"/>`,
		"fallback": "ri:image-circle-ai-line",
	});
}

export default Component;
