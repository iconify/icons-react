import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_hnyxb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_hnyxb0p"/>`,
		"fallback": "griddy-icons:c-sharp",
	});
}

export default Component;
