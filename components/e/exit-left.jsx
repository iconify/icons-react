import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wudkh2r8y.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wudkh2r8y"/>`,
		"fallback": "system-uicons:exit-left",
	});
}

export default Component;
