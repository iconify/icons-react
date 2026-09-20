import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dydw81b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dydw81b5k"/>`,
		"fallback": "solar:hanger-linear",
	});
}

export default Component;
