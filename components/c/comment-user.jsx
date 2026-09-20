import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7ce7h84x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7ce7h84x"/>`,
		"fallback": "memory:comment-user",
	});
}

export default Component;
