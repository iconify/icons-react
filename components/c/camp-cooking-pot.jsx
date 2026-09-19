import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7_ctwb_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7_ctwb_g"/>`,
		"fallback": "game-icons:camp-cooking-pot",
	});
}

export default Component;
