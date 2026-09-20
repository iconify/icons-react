import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq9te817o.css';
import '../../css/h/h96e8ebuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq9te817o"/><path class="h96e8ebuc"/>`,
		"fallback": "streamline-ultimate:information-desk-customer-bold",
	});
}

export default Component;
