import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf3ch8pgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf3ch8pgn"/>`,
		"fallback": "mdi:capsule",
	});
}

export default Component;
