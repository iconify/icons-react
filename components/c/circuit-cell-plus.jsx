import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz__jgbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz__jgbed"/>`,
		"fallback": "tabler:circuit-cell-plus",
	});
}

export default Component;
