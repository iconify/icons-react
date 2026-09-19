import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fys1ehhsm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fys1ehhsm"/>`,
		"fallback": "file-icons:browserslist",
	});
}

export default Component;
