import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-k-0et4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-k-0et4g"/>`,
		"fallback": "mingcute:clock-8-fill",
	});
}

export default Component;
