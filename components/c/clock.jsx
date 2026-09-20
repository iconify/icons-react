import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8e7ms_4s.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8e7ms_4s"/>`,
		"fallback": "picon:clock",
	});
}

export default Component;
