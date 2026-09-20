import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpja5bb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpja5bb6j"/>`,
		"fallback": "simple-icons:bitcoin",
	});
}

export default Component;
