import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy1mwtb3s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy1mwtb3s"/>`,
		"fallback": "uiw:cloud-upload",
	});
}

export default Component;
