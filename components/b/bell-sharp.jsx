import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dda_q--5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dda_q--5h"/>`,
		"fallback": "keyline-icons:bell-sharp",
	});
}

export default Component;
