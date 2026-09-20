import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl010k52n.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl010k52n"/>`,
		"fallback": "picon:bill",
	});
}

export default Component;
