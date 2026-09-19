import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsa1xl24d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsa1xl24d"/>`,
		"fallback": "file-icons:autohotkey",
	});
}

export default Component;
