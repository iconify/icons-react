import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu7e8zb5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu7e8zb5s"/>`,
		"fallback": "game-icons:custodian-helmet",
	});
}

export default Component;
