import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgsbk7zch.css';

const viewBox = {"width":472,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgsbk7zch"/>`,
		"fallback": "fa6-brands:codiepie",
	});
}

export default Component;
