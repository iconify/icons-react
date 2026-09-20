import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czc7d4r2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="czc7d4r2s"/>`,
		"fallback": "stash:corner-up-left-solid",
	});
}

export default Component;
