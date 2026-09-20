import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn5b9sbwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fn5b9sbwl"/>`,
		"fallback": "ix:comment-alt-filled",
	});
}

export default Component;
