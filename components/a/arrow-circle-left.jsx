import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9-rx4bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9-rx4bkn"/>`,
		"fallback": "noviair:arrow-circle-left",
	});
}

export default Component;
