import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo3yfnbgn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo3yfnbgn"/>`,
		"fallback": "pinhead:baby-in-swaddle",
	});
}

export default Component;
