import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np74lyr1f.css';
import '../../css/o/oyd07mbzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np74lyr1f"/><path class="oyd07mbzp"/>`,
		"fallback": "selfhst:datasette-light",
	});
}

export default Component;
