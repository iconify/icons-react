import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g81rw9b8q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g81rw9b8q"/>`,
		"fallback": "fa7-regular:id-badge",
	});
}

export default Component;
