import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o64tcobbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o64tcobbp"/>`,
		"fallback": "ri:camera-lens-ai-fill",
	});
}

export default Component;
