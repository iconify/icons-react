import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brxsehb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brxsehb3j"/>`,
		"fallback": "mdi:comment-add-outline",
	});
}

export default Component;
