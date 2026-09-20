import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozglyrbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozglyrbwg"/>`,
		"fallback": "keyline-icons:clock-plus-sharp",
	});
}

export default Component;
