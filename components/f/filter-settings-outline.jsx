import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulgl77hkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulgl77hkn"/>`,
		"fallback": "mdi:filter-settings-outline",
	});
}

export default Component;
