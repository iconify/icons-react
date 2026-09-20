import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vektpiz0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vektpiz0f"/>`,
		"fallback": "tabler:artboard-filled",
	});
}

export default Component;
