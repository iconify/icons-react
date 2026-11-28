import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v64szlbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v64szlbhl"/>`,
		"fallback": "noviair:camera-refresh",
	});
}

export default Component;
