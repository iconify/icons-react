import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izapb2wvm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izapb2wvm"/>`,
		"fallback": "fa7-brands:fantasy-flight-games",
	});
}

export default Component;
