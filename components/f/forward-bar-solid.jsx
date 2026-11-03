import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl7yb5rrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tl7yb5rrf"/>`,
		"fallback": "sidekickicons:forward-bar-solid",
	});
}

export default Component;
