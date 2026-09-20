import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph7wxybju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ph7wxybju"/>`,
		"fallback": "streamline-sharp:insert-top-left-solid",
	});
}

export default Component;
