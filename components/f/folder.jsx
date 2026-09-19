import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w02q53zfm.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w02q53zfm"/>`,
		"fallback": "foundation:folder",
	});
}

export default Component;
