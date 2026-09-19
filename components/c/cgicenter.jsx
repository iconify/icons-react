import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg72n70na.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg72n70na"/>`,
		"fallback": "whh:cgicenter",
	});
}

export default Component;
