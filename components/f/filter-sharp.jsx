import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wky-31b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wky-31b5g"/>`,
		"fallback": "keyline-icons:filter-sharp",
	});
}

export default Component;
