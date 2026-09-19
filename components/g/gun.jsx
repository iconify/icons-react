import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijl1ydb8q.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijl1ydb8q"/>`,
		"fallback": "whh:gun",
	});
}

export default Component;
