import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ary96kbsg.css';

const viewBox = {"width":680,"height":694};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ary96kbsg"/>`,
		"fallback": "ls:instagram",
	});
}

export default Component;
