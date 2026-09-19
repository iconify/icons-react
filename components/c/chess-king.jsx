import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phkpb-2vq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phkpb-2vq"/>`,
		"fallback": "at-icons:chess-king",
	});
}

export default Component;
