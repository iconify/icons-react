import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehj45xb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehj45xb5f"/>`,
		"fallback": "uil:arrows-resize-v",
	});
}

export default Component;
