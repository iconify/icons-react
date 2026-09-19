import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvp_ebc6g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvp_ebc6g"/>`,
		"fallback": "game-icons:burning-book",
	});
}

export default Component;
