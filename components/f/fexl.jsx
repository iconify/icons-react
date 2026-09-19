import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajl8h9bkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajl8h9bkn"/>`,
		"fallback": "file-icons:fexl",
	});
}

export default Component;
