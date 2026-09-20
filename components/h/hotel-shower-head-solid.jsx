import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knb7jvxiv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="knb7jvxiv"/>`,
		"fallback": "streamline:hotel-shower-head-solid",
	});
}

export default Component;
