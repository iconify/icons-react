import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr8ciuppm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr8ciuppm"/>`,
		"fallback": "hugeicons:ai-editing",
	});
}

export default Component;
