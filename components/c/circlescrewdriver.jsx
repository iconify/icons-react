import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yox13vb9q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yox13vb9q"/>`,
		"fallback": "whh:circlescrewdriver",
	});
}

export default Component;
