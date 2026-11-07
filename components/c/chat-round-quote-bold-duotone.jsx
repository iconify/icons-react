import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0jc9qlwi.css';
import '../../css/w/wvvzy0eks.css';
import '../../css/k/kzrznpbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0jc9qlwi"/><path clip-rule="evenodd" class="wvvzy0eks"/><path clip-rule="evenodd" class="kzrznpbpr"/>`,
		"fallback": "solar:chat-round-quote-bold-duotone",
	});
}

export default Component;
