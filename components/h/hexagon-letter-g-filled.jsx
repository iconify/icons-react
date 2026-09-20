import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am1tq7v-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am1tq7v-t"/>`,
		"fallback": "tabler:hexagon-letter-g-filled",
	});
}

export default Component;
