import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwk8eab6x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rwk8eab6x"/>`,
		"fallback": "lsicon:file-rar-filled",
	});
}

export default Component;
