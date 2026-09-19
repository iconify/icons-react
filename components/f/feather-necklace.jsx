import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_9f3ie_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_9f3ie_s"/>`,
		"fallback": "game-icons:feather-necklace",
	});
}

export default Component;
