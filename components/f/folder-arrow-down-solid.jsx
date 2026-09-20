import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa6-rdobn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aa6-rdobn"/>`,
		"fallback": "stash:folder-arrow-down-solid",
	});
}

export default Component;
