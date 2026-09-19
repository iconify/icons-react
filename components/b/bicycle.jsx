import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csq3wgbvd.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csq3wgbvd"/>`,
		"fallback": "fa6-solid:bicycle",
	});
}

export default Component;
