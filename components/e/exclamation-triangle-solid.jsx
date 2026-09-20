import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfj4fbbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfj4fbbbt"/>`,
		"fallback": "stash:exclamation-triangle-solid",
	});
}

export default Component;
