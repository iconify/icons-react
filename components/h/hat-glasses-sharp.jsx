import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5g_1949x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5g_1949x"/>`,
		"fallback": "keyline-icons:hat-glasses-sharp",
	});
}

export default Component;
