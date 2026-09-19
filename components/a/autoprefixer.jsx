import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onl5fdbhd.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onl5fdbhd"/>`,
		"fallback": "fa-brands:autoprefixer",
	});
}

export default Component;
