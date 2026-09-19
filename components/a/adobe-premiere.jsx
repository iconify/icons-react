import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv19kwmqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv19kwmqr"/>`,
		"fallback": "file-icons:adobe-premiere",
	});
}

export default Component;
