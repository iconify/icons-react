import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2ltjr0sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2ltjr0sn"/>`,
		"fallback": "majesticons:creditcard",
	});
}

export default Component;
