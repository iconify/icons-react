import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1t73q-cv.css';
import '../../css/k/kisx4ib0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1t73q-cv duoicon-secondary-layer"/><path class="duoicon-primary-layer kisx4ib0m"/>`,
		"fallback": "duo-icons:baby-carriage",
	});
}

export default Component;
