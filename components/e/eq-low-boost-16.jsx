import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm-51lkin.css';
import '../../css/x/x1wvsgy0b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm-51lkin"/><path class="x1wvsgy0b"/>`,
		"fallback": "qlementine-icons:eq-low-boost-16",
	});
}

export default Component;
