import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekcb3b0rz.css';
import '../../css/j/jfwgpxqzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekcb3b0rz"/><path class="jfwgpxqzl"/>`,
		"fallback": "ion:fast-food",
	});
}

export default Component;
