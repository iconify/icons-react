import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clg8mbq-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clg8mbq-p"/>`,
		"fallback": "mingcute:badge-euro-fill",
	});
}

export default Component;
