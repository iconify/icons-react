import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzk4g4ahp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzk4g4ahp"/>`,
		"fallback": "mdi:fuel-pump-outline",
	});
}

export default Component;
