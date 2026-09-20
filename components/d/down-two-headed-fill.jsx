import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smc5l5zng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smc5l5zng"/>`,
		"fallback": "si:down-two-headed-fill",
	});
}

export default Component;
