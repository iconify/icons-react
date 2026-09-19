import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llw355j1w.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llw355j1w"/>`,
		"fallback": "whh:google",
	});
}

export default Component;
