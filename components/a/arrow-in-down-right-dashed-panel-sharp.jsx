import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2b8b2bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2b8b2bbi"/>`,
		"fallback": "keyline-icons:arrow-in-down-right-dashed-panel-sharp",
	});
}

export default Component;
