import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh3-hqbjd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh3-hqbjd"/>`,
		"fallback": "fa7-solid:face-sad-cry",
	});
}

export default Component;
