import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce-k3acqk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ce-k3acqk"/>`,
		"fallback": "streamline-flex-color:discussion-converstion-reply-flat",
	});
}

export default Component;
