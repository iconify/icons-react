import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l22617b1g.css';
import '../../css/o/obtf6y2yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l22617b1g"/><path class="obtf6y2yz"/>`,
		"fallback": "basil:book-open-outline",
	});
}

export default Component;
