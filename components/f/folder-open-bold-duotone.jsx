import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j92jx1bzk.css';
import '../../css/a/atm69obhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j92jx1bzk"/><path class="atm69obhq"/>`,
		"fallback": "solar:folder-open-bold-duotone",
	});
}

export default Component;
