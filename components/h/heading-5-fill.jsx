import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu2dad7bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu2dad7bg"/>`,
		"fallback": "mingcute:heading-5-fill",
	});
}

export default Component;
