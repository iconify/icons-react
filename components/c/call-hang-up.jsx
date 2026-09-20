import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv1-teoia.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv1-teoia"/>`,
		"fallback": "streamline:call-hang-up",
	});
}

export default Component;
