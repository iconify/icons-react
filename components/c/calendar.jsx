import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5489if1z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5489if1z"/>`,
		"fallback": "simple-line-icons:calendar",
	});
}

export default Component;
