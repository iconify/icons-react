import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3yoi7b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3yoi7b1c"/>`,
		"fallback": "mingcute:glass-cup-line",
	});
}

export default Component;
