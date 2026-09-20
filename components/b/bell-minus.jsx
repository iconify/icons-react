import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnhz1hbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnhz1hbif"/>`,
		"fallback": "lucide:bell-minus",
	});
}

export default Component;
