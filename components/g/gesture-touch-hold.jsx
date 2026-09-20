import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0u3el_yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0u3el_yw"/>`,
		"fallback": "mdi:gesture-touch-hold",
	});
}

export default Component;
