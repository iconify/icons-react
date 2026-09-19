import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eph5_wbjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eph5_wbjy"/>`,
		"fallback": "file-icons:analytica",
	});
}

export default Component;
