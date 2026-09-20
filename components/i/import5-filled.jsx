import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x44dz35kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x44dz35kc"/>`,
		"fallback": "reicon:import5-filled",
	});
}

export default Component;
