import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws7ta51xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws7ta51xf"/>`,
		"fallback": "coolicons:file-lock-corner-fill-round",
	});
}

export default Component;
