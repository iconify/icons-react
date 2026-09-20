import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hulzexb-e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hulzexb-e"/>`,
		"fallback": "streamline:button-pause-2-solid",
	});
}

export default Component;
