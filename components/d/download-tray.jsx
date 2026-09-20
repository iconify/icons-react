import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1f2vmboi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1f2vmboi"/>`,
		"fallback": "streamline-flex-color:download-tray",
	});
}

export default Component;
