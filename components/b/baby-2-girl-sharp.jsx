import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/morvqxt_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="morvqxt_s"/>`,
		"fallback": "keyline-icons:baby-2-girl-sharp",
	});
}

export default Component;
