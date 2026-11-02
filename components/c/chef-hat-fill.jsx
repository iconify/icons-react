import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jurw6yb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jurw6yb4s"/>`,
		"fallback": "mingcute:chef-hat-fill",
	});
}

export default Component;
