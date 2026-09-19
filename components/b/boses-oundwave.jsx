import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfsuj7bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfsuj7bdf"/>`,
		"fallback": "cbi:boses-oundwave",
	});
}

export default Component;
