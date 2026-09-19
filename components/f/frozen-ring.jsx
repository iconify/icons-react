import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg3s3f--q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg3s3f--q"/>`,
		"fallback": "game-icons:frozen-ring",
	});
}

export default Component;
