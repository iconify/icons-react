import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofpqxnb0x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofpqxnb0x"/>`,
		"fallback": "picon:dice2",
	});
}

export default Component;
