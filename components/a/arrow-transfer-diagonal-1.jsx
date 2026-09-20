import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-7-34bbm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-7-34bbm"/>`,
		"fallback": "streamline-color:arrow-transfer-diagonal-1",
	});
}

export default Component;
