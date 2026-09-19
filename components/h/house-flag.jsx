import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pesnnwy8b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pesnnwy8b"/>`,
		"fallback": "fa7-solid:house-flag",
	});
}

export default Component;
