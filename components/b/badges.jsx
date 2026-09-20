import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es3nb9bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es3nb9bbq"/>`,
		"fallback": "tabler:badges",
	});
}

export default Component;
