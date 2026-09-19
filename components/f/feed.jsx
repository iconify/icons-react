import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlia8ab3u.css';

const viewBox = {"width":1408,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlia8ab3u"/>`,
		"fallback": "fa:feed",
	});
}

export default Component;
