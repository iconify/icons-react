import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_tx2tb8x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_tx2tb8x"/>`,
		"fallback": "pinhead:illinois",
	});
}

export default Component;
