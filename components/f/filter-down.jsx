import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kar8z_b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kar8z_b4l"/>`,
		"fallback": "tabler:filter-down",
	});
}

export default Component;
