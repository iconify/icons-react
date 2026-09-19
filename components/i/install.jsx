import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1a109dly.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1a109dly"/>`,
		"fallback": "whh:install",
	});
}

export default Component;
