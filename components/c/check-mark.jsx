import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drne2_c5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drne2_c5i"/>`,
		"fallback": "game-icons:check-mark",
	});
}

export default Component;
