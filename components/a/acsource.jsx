import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb6jb7bif.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb6jb7bif"/>`,
		"fallback": "whh:acsource",
	});
}

export default Component;
