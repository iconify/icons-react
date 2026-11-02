import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_a_vsb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_a_vsb8p"/>`,
		"fallback": "mingcute:edit-4-fill",
	});
}

export default Component;
