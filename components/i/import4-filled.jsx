import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/une53x_rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="une53x_rg"/>`,
		"fallback": "reicon:import4-filled",
	});
}

export default Component;
