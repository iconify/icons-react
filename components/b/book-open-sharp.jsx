import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6cjo_bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6cjo_bkv"/>`,
		"fallback": "keyline-icons:book-open-sharp",
	});
}

export default Component;
