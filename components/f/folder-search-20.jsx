import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-w_jtvez.css';
import '../../css/z/z0u0mzbcw.css';
import '../../css/c/cn7q8feaf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-w_jtvez"/><path class="z0u0mzbcw"/><path class="cn7q8feaf"/>`,
		"fallback": "energy-icons:folder-search-20",
	});
}

export default Component;
