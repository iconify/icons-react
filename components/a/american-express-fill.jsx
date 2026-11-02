import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjv1u1-hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjv1u1-hz"/>`,
		"fallback": "mingcute:american-express-fill",
	});
}

export default Component;
