import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktbh_1ykl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ktbh_1ykl"/>`,
		"fallback": "streamline:crutch-solid",
	});
}

export default Component;
