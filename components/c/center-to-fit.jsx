import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy8g74bxo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy8g74bxo"/>`,
		"fallback": "carbon:center-to-fit",
	});
}

export default Component;
