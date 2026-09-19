import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh7z1bckc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh7z1bckc"/>`,
		"fallback": "fa6-solid:hands-praying",
	});
}

export default Component;
