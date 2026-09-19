import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq8lmivne.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq8lmivne"/>`,
		"fallback": "codicon:chat-import",
	});
}

export default Component;
