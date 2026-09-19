import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo01anvpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zo01anvpl"/>`,
		"fallback": "ion:arrow-up-right-box",
	});
}

export default Component;
