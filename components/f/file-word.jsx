import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1s8zlrnr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1s8zlrnr"/>`,
		"fallback": "fa7-solid:file-word",
	});
}

export default Component;
