import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea0b2cokw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ea0b2cokw"/>`,
		"fallback": "streamline:clipboard-remove-remix",
	});
}

export default Component;
