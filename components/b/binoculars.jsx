import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klhx1xbih.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klhx1xbih"/>`,
		"fallback": "whh:binoculars",
	});
}

export default Component;
