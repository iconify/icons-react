import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7xjbxbqp.css';
import '../../css/m/mi71ysxct.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7xjbxbqp"/><path class="mi71ysxct"/>`,
		"fallback": "energy-icons:hacksaw-20",
	});
}

export default Component;
