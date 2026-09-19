import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_k72rhzr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_k72rhzr"/>`,
		"fallback": "fa7-solid:c",
	});
}

export default Component;
