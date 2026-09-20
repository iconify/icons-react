import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmky_1t8v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmky_1t8v"/>`,
		"fallback": "pinhead:ankh",
	});
}

export default Component;
