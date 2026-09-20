import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjfor6daa.css';
import '../../css/y/y2ppayb0y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjfor6daa"/><path class="y2ppayb0y"/>`,
		"fallback": "qlementine-icons:eq-medium-boost-16",
	});
}

export default Component;
