import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_s5fq2ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_s5fq2ua"/>`,
		"fallback": "mingcute:brush-3-ai-fill",
	});
}

export default Component;
