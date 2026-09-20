import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as8ev18tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as8ev18tm"/>`,
		"fallback": "mingcute:deepseek-fill",
	});
}

export default Component;
