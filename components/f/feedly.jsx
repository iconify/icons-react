import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oen4v5bni.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oen4v5bni"/>`,
		"fallback": "whh:feedly",
	});
}

export default Component;
