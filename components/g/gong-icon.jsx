import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr96rnsfn.css';

const viewBox = {"width":1900,"height":1900};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr96rnsfn"/>`,
		"fallback": "thesvg-color:gong-icon",
	});
}

export default Component;
