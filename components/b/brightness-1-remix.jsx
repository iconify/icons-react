import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp-u-h4-f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tp-u-h4-f"/>`,
		"fallback": "streamline:brightness-1-remix",
	});
}

export default Component;
