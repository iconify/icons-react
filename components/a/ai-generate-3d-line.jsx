import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8itlj66h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8itlj66h"/>`,
		"fallback": "ri:ai-generate-3d-line",
	});
}

export default Component;
