import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iji9n2szv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iji9n2szv"/>`,
		"fallback": "game-icons:fireflake",
	});
}

export default Component;
