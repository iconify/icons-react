import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgzpk6fcd.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgzpk6fcd"/>`,
		"fallback": "whh:female",
	});
}

export default Component;
