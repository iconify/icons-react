import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq83s-bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uq83s-bhh"/>`,
		"fallback": "stash:chevron-up",
	});
}

export default Component;
