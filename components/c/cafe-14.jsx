import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sexsn3bnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sexsn3bnm"/>`,
		"fallback": "osmic:cafe-14",
	});
}

export default Component;
