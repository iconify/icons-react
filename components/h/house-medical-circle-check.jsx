import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4jsp-bsy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4jsp-bsy"/>`,
		"fallback": "fa7-solid:house-medical-circle-check",
	});
}

export default Component;
