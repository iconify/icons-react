import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf-8-3bak.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf-8-3bak"/>`,
		"fallback": "fa7-solid:folder-open",
	});
}

export default Component;
