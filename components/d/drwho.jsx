import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yenxbdjsp.css';

const viewBox = {"width":910,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yenxbdjsp"/>`,
		"fallback": "whh:drwho",
	});
}

export default Component;
