import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u14sdab1v.css';

const viewBox = {"width":397,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u14sdab1v"/>`,
		"fallback": "file-icons:homebrew",
	});
}

export default Component;
