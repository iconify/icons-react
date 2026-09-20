import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxxqo73bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxxqo73bd"/>`,
		"fallback": "keyline-icons:clock-minus-sharp",
	});
}

export default Component;
