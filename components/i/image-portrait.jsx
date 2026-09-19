import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzrje_bgh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzrje_bgh"/>`,
		"fallback": "fa7-solid:image-portrait",
	});
}

export default Component;
