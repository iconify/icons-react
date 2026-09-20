import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgxtj0bdv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rgxtj0bdv"/>`,
		"fallback": "streamline:give-gift-solid",
	});
}

export default Component;
