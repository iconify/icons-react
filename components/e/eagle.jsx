import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj5p2mlzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj5p2mlzh"/>`,
		"fallback": "file-icons:eagle",
	});
}

export default Component;
