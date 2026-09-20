import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muno4tb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muno4tb-k"/>`,
		"fallback": "tabler:hexagon-letter-e-filled",
	});
}

export default Component;
