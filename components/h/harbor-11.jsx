import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seiiy8a5r.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seiiy8a5r"/>`,
		"fallback": "maki:harbor-11",
	});
}

export default Component;
