import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bankjub9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bankjub9g"/>`,
		"fallback": "mingcute:box-fill",
	});
}

export default Component;
