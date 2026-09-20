import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i32j96y3m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i32j96y3m"/>`,
		"fallback": "picon:ballot",
	});
}

export default Component;
