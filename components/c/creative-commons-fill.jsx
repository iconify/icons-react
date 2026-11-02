import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1884bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc1884bqa"/>`,
		"fallback": "mingcute:creative-commons-fill",
	});
}

export default Component;
