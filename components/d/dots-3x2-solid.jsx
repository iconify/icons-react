import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff75ifvnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ff75ifvnx"/>`,
		"fallback": "sidekickicons:dots-3x2-solid",
	});
}

export default Component;
