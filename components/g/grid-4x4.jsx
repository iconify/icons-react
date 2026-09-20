import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vef-s7bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vef-s7bpa"/>`,
		"fallback": "tabler:grid-4x4",
	});
}

export default Component;
