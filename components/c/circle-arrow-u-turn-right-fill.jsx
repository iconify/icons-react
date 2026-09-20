import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h53i5ibuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h53i5ibuf"/>`,
		"fallback": "keyline-icons:circle-arrow-u-turn-right-fill",
	});
}

export default Component;
