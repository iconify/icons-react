import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wabtt1w3y.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wabtt1w3y"/>`,
		"fallback": "ps:apple",
	});
}

export default Component;
