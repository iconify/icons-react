import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2yme1wsh.css';
import '../../css/w/wyg7xl8ps.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2yme1wsh"/><path class="wyg7xl8ps"/>`,
		"fallback": "maki:college-11",
	});
}

export default Component;
