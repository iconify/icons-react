import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx8f_jb4v.css';
import '../../css/k/k4yovub7q.css';

const viewBox = {"width":9956,"height":700,"left":55,"top":142};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx8f_jb4v"/><path class="k4yovub7q"/>`,
		"fallback": "thesvg-color:claude-of-tanks-light",
	});
}

export default Component;
