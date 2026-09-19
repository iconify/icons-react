import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agnn5lbzk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agnn5lbzk"/>`,
		"fallback": "fa7-solid:blender",
	});
}

export default Component;
