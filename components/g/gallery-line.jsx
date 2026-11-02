import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el_pgbcil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el_pgbcil"/>`,
		"fallback": "mingcute:gallery-line",
	});
}

export default Component;
