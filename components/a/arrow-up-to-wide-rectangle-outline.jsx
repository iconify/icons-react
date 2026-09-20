import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qidcoy8qd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qidcoy8qd"/>`,
		"fallback": "pinhead:arrow-up-to-wide-rectangle-outline",
	});
}

export default Component;
