import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz7_oyuzk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz7_oyuzk"/>`,
		"fallback": "fa7-regular:bell-slash",
	});
}

export default Component;
