import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn53rvmzo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn53rvmzo"/>`,
		"fallback": "fa7-solid:file-circle-plus",
	});
}

export default Component;
