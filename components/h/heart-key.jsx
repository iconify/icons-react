import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1v_3z4yt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1v_3z4yt"/>`,
		"fallback": "game-icons:heart-key",
	});
}

export default Component;
