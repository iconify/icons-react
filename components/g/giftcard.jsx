import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9oegmb2k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9oegmb2k"/>`,
		"fallback": "f7:giftcard",
	});
}

export default Component;
