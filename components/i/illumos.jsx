import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exom9fblv.css';

const viewBox = {"width":394,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exom9fblv"/>`,
		"fallback": "file-icons:illumos",
	});
}

export default Component;
