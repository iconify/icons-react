import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma9bgvbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma9bgvbpg"/>`,
		"fallback": "tabler:arrow-narrow-down",
	});
}

export default Component;
