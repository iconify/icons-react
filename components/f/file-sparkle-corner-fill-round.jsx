import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmjz6fb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmjz6fb8q"/>`,
		"fallback": "coolicons:file-sparkle-corner-fill-round",
	});
}

export default Component;
