import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koggl612w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koggl612w"/>`,
		"fallback": "griddy-icons:arrow-circle-down-filled",
	});
}

export default Component;
