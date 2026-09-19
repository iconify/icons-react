import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm-gy2bwe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm-gy2bwe"/>`,
		"fallback": "game-icons:eyedropper",
	});
}

export default Component;
