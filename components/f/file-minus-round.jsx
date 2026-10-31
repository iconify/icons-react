import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw1cj3bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw1cj3bng"/>`,
		"fallback": "coolicons:file-minus-round",
	});
}

export default Component;
