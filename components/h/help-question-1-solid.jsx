import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpfo9nslk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mpfo9nslk"/>`,
		"fallback": "streamline:help-question-1-solid",
	});
}

export default Component;
