import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2yvi0b4p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2yvi0b4p"/>`,
		"fallback": "streamline-color:google-flat",
	});
}

export default Component;
