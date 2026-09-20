import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeugzib9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeugzib9d"/>`,
		"fallback": "tabler:adjustments-bolt",
	});
}

export default Component;
