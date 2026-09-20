import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn279sbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn279sbtu"/>`,
		"fallback": "streamline-ultimate:graph-stats-descend-bold",
	});
}

export default Component;
