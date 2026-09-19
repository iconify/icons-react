import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow10mebrl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow10mebrl"/>`,
		"fallback": "bi:dash",
	});
}

export default Component;
