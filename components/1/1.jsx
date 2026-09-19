import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2s9xyjfm.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2s9xyjfm"/>`,
		"fallback": "fa6-solid:1",
	});
}

export default Component;
