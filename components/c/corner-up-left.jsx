import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-49-9v2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v-49-9v2q"/>`,
		"fallback": "stash:corner-up-left",
	});
}

export default Component;
