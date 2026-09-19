import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7dx4lb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7dx4lb0w"/>`,
		"fallback": "griddy-icons:chart-bar-square-up-filled",
	});
}

export default Component;
