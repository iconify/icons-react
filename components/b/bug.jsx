import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9_-o9owr.css';

const viewBox = {"width":512,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9_-o9owr"/>`,
		"fallback": "ps:bug",
	});
}

export default Component;
