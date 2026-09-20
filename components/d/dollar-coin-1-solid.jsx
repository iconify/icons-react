import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9w20pb9z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9w20pb9z"/>`,
		"fallback": "streamline:dollar-coin-1-solid",
	});
}

export default Component;
