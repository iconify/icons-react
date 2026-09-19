import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1gq3sbnq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1gq3sbnq"/>`,
		"fallback": "game-icons:egg-eye",
	});
}

export default Component;
