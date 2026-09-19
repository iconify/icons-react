import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y--ket0br.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y--ket0br"/>`,
		"fallback": "fa-regular:eye",
	});
}

export default Component;
