import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs_aimy5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs_aimy5l"/>`,
		"fallback": "cbi:bedroom",
	});
}

export default Component;
