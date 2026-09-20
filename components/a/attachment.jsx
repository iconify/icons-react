import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns0o8vbht.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns0o8vbht"/>`,
		"fallback": "picon:attachment",
	});
}

export default Component;
