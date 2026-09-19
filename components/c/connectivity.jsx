import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voicgi8vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voicgi8vf"/>`,
		"fallback": "griddy-icons:connectivity",
	});
}

export default Component;
