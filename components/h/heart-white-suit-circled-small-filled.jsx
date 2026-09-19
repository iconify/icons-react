import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja9-_j11q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja9-_j11q"/>`,
		"fallback": "dinkie-icons:heart-white-suit-circled-small-filled",
	});
}

export default Component;
