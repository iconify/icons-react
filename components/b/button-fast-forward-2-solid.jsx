import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkvmp3jov.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fkvmp3jov"/>`,
		"fallback": "streamline:button-fast-forward-2-solid",
	});
}

export default Component;
