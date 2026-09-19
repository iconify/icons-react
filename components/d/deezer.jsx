import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt4pc4b5i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt4pc4b5i"/>`,
		"fallback": "fa7-brands:deezer",
	});
}

export default Component;
