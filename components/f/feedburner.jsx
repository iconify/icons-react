import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w66bhhk3x.css';

const viewBox = {"width":432,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w66bhhk3x"/>`,
		"fallback": "ps:feedburner",
	});
}

export default Component;
