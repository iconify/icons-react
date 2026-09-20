import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tauuimkqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tauuimkqn"/>`,
		"fallback": "mdi:comma-circle-outline",
	});
}

export default Component;
