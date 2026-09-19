import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckx81ibjd.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckx81ibjd"/>`,
		"fallback": "whh:counter",
	});
}

export default Component;
