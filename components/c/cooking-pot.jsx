import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnn0_gj7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnn0_gj7r"/>`,
		"fallback": "game-icons:cooking-pot",
	});
}

export default Component;
