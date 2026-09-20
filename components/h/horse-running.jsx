import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9-xbkb8a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9-xbkb8a"/>`,
		"fallback": "pinhead:horse-running",
	});
}

export default Component;
