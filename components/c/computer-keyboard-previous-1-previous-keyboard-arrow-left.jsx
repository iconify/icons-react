import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcg4c_nrx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcg4c_nrx"/>`,
		"fallback": "streamline:computer-keyboard-previous-1-previous-keyboard-arrow-left",
	});
}

export default Component;
