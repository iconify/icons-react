import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmr10_dtq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmr10_dtq"/>`,
		"fallback": "fa6-regular:chess-knight",
	});
}

export default Component;
