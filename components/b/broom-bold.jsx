import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ochnrrb8e.css';
import '../../css/k/kvj5aub-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ochnrrb8e"/><path class="kvj5aub-p"/>`,
		"fallback": "solar:broom-bold",
	});
}

export default Component;
