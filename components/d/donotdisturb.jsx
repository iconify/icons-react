import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv-w00b2s.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv-w00b2s"/>`,
		"fallback": "whh:donotdisturb",
	});
}

export default Component;
