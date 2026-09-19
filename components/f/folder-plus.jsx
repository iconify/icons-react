import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwj_vobmx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwj_vobmx"/>`,
		"fallback": "fa7-solid:folder-plus",
	});
}

export default Component;
