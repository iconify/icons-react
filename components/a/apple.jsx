import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii0qy9b8q.css';

const viewBox = {"width":601,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii0qy9b8q"/>`,
		"fallback": "ls:apple",
	});
}

export default Component;
