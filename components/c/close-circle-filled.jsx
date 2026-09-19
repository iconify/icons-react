import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujm-_ywyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujm-_ywyx"/>`,
		"fallback": "griddy-icons:close-circle-filled",
	});
}

export default Component;
