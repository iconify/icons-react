import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj0alpb3e.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj0alpb3e"/>`,
		"fallback": "whh:darthvader",
	});
}

export default Component;
