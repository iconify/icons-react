import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd1v__7tp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd1v__7tp"/>`,
		"fallback": "game-icons:beer-stein",
	});
}

export default Component;
