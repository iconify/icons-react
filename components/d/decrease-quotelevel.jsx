import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx80h9bhh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx80h9bhh"/>`,
		"fallback": "f7:decrease-quotelevel",
	});
}

export default Component;
