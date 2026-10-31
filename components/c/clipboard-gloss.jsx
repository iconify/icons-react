import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp1ok0bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp1ok0bfw"/>`,
		"fallback": "withicons:clipboard-gloss",
	});
}

export default Component;
