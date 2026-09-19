import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3c0_-nfk.css';
import '../../css/g/g6i8-p-_n.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3c0_-nfk"/><path class="g6i8-p-_n"/>`,
		"fallback": "topcoat:calendar",
	});
}

export default Component;
