import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7jmbd1dd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7jmbd1dd"/>`,
		"fallback": "fa6-brands:google-plus",
	});
}

export default Component;
