import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvhc52j6y.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvhc52j6y"/>`,
		"fallback": "fa-solid:grin-stars",
	});
}

export default Component;
