import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npsi0gptz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npsi0gptz"/>`,
		"fallback": "hugeicons:chart-no-axes-combined",
	});
}

export default Component;
