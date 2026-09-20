import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imojjfb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imojjfb3d"/>`,
		"fallback": "si:filter-list-alt-line",
	});
}

export default Component;
