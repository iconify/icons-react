import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b01z6tb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b01z6tb3b"/>`,
		"fallback": "keyline-icons:circle-check-sharp-fill",
	});
}

export default Component;
