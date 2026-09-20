import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_7pnbiga.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_7pnbiga"/>`,
		"fallback": "streamline-flex-color:input-box",
	});
}

export default Component;
