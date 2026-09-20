import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n93ug4cnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n93ug4cnh"/>`,
		"fallback": "tabler:cactus-filled",
	});
}

export default Component;
