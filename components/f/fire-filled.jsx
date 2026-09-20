import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgtekh6ey.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgtekh6ey"/>`,
		"fallback": "lsicon:fire-filled",
	});
}

export default Component;
