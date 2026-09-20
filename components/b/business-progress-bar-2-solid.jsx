import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh1vh8bgc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rh1vh8bgc"/>`,
		"fallback": "streamline:business-progress-bar-2-solid",
	});
}

export default Component;
