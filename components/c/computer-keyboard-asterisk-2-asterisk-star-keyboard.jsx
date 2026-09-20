import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r35avtbpo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r35avtbpo"/>`,
		"fallback": "streamline:computer-keyboard-asterisk-2-asterisk-star-keyboard",
	});
}

export default Component;
