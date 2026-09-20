import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzu3tqzwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lzu3tqzwx"/>`,
		"fallback": "qlementine-icons:fork-16",
	});
}

export default Component;
