import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wms6fp07h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wms6fp07h"/>`,
		"fallback": "noviair:chart-increasing",
	});
}

export default Component;
