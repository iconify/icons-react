import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw8-seayw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw8-seayw"/>`,
		"fallback": "fa7-regular:folder-closed",
	});
}

export default Component;
