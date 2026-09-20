import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoac4dbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoac4dbaz"/>`,
		"fallback": "mdi:content-save-move-outline",
	});
}

export default Component;
