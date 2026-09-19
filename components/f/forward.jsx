import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbh0l5b0d.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbh0l5b0d"/>`,
		"fallback": "whh:forward",
	});
}

export default Component;
