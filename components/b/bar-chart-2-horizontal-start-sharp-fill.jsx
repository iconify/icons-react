import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbn3k0brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbn3k0brm"/>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-start-sharp-fill",
	});
}

export default Component;
