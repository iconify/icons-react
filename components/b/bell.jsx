import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kra7neb9y.css';

const viewBox = {"width":768,"height":758};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kra7neb9y"/>`,
		"fallback": "ls:bell",
	});
}

export default Component;
