import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr5u3zcnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yr5u3zcnl"/>`,
		"fallback": "heroicons:chevron-right-solid",
	});
}

export default Component;
