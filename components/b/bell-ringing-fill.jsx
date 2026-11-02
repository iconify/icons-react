import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnnj1ubqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnnj1ubqi"/>`,
		"fallback": "mingcute:bell-ringing-fill",
	});
}

export default Component;
