import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8t73ccrp.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8t73ccrp"/>`,
		"fallback": "fa6-solid:house-medical",
	});
}

export default Component;
