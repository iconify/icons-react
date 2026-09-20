import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb6u6tbuf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sb6u6tbuf"/>`,
		"fallback": "qlementine-icons:cowbell-16",
	});
}

export default Component;
