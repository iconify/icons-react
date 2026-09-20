import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhq8bjbyv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhq8bjbyv"/>`,
		"fallback": "streamline:arrow-transfer-diagonal-3",
	});
}

export default Component;
