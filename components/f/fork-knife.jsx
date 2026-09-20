import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkztq_bih.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkztq_bih"/>`,
		"fallback": "streamline:fork-knife",
	});
}

export default Component;
