import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezau3nrei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezau3nrei"/>`,
		"fallback": "tabler:alien-filled",
	});
}

export default Component;
