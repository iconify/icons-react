import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upq_ys5ks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upq_ys5ks"/>`,
		"fallback": "game-icons:compass",
	});
}

export default Component;
