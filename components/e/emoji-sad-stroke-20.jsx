import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yynfaacui.css';
import '../../css/g/g6pvh7b3y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yynfaacui"/><path class="g6pvh7b3y"/>`,
		"fallback": "garden:emoji-sad-stroke-20",
	});
}

export default Component;
