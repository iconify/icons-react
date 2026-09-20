import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_yapab2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_yapab2e"/>`,
		"fallback": "streamline-ultimate:gold-bars-bold",
	});
}

export default Component;
