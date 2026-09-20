import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb1rlrvlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jb1rlrvlr"/>`,
		"fallback": "stash:cloud-check-solid",
	});
}

export default Component;
