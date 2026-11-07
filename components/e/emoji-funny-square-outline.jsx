import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4xa_-g-t.css';
import '../../css/x/x1ss0rbtf.css';
import '../../css/m/mwvc4bkeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4xa_-g-t"/><path class="x1ss0rbtf"/><path clip-rule="evenodd" class="mwvc4bkeq"/>`,
		"fallback": "solar:emoji-funny-square-outline",
	});
}

export default Component;
