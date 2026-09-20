import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4zdoxsoz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e4zdoxsoz"/>`,
		"fallback": "streamline-flex:gallery-solid",
	});
}

export default Component;
