import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac6_keb7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac6_keb7l"/>`,
		"fallback": "file-icons:bison",
	});
}

export default Component;
