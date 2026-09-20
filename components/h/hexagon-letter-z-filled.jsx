import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkkefdb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkkefdb8b"/>`,
		"fallback": "tabler:hexagon-letter-z-filled",
	});
}

export default Component;
