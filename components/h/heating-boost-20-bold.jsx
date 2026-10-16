import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omf76gbof.css';
import '../../css/f/f40uyxeum.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omf76gbof"/><path class="f40uyxeum"/>`,
		"fallback": "energy-icons:heating-boost-20-bold",
	});
}

export default Component;
