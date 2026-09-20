import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmjy-5bzx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmjy-5bzx"/>`,
		"fallback": "picon:drums",
	});
}

export default Component;
