import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsb37qj5r.css';
import '../../css/k/kgfkin3eu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsb37qj5r"/><path class="kgfkin3eu"/>`,
		"fallback": "qlementine-icons:eq-flat-16",
	});
}

export default Component;
