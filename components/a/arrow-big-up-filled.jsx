import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfk2dz9ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfk2dz9ub"/>`,
		"fallback": "tabler:arrow-big-up-filled",
	});
}

export default Component;
