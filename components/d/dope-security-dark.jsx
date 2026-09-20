import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7k35bb2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7k35bb2b"/>`,
		"fallback": "selfhst:dope-security-dark",
	});
}

export default Component;
