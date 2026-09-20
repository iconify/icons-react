import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu0q_f7sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu0q_f7sz"/>`,
		"fallback": "tabler:battery-automotive",
	});
}

export default Component;
