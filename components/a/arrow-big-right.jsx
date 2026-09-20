import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxudl40-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxudl40-n"/>`,
		"fallback": "tabler:arrow-big-right",
	});
}

export default Component;
