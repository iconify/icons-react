import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs7mb-jgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs7mb-jgy"/>`,
		"fallback": "mingcute:cast-fill",
	});
}

export default Component;
