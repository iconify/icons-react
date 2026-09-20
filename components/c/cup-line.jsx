import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe4yu7b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe4yu7b0i"/>`,
		"fallback": "ri:cup-line",
	});
}

export default Component;
