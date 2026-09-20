import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kos5csu4z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kos5csu4z"/>`,
		"fallback": "lsicon:file-avi-filled",
	});
}

export default Component;
