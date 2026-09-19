import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brw53hbng.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brw53hbng"/>`,
		"fallback": "game-icons:heart-bottle",
	});
}

export default Component;
