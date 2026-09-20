import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqby3ib5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tqby3ib5h"/>`,
		"fallback": "qlementine-icons:ink-16",
	});
}

export default Component;
