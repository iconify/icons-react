import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioxslbcvw.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioxslbcvw"/>`,
		"fallback": "fa6-solid:house-circle-exclamation",
	});
}

export default Component;
