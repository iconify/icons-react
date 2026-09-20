import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkzj6ubll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vkzj6ubll"/>`,
		"fallback": "streamline-freehand:allowances-no-smoking",
	});
}

export default Component;
