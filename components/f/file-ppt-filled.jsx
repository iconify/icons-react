import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwnt7jijk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jwnt7jijk"/>`,
		"fallback": "lsicon:file-ppt-filled",
	});
}

export default Component;
