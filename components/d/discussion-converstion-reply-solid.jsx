import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc4xw-vcs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jc4xw-vcs"/>`,
		"fallback": "streamline-flex:discussion-converstion-reply-solid",
	});
}

export default Component;
