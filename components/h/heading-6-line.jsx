import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba-9j369s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba-9j369s"/>`,
		"fallback": "mingcute:heading-6-line",
	});
}

export default Component;
