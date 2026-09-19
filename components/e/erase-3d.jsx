import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5r_4793o.css';
import '../../css/k/kgwqmdg7m.css';
import '../../css/y/y8b389s9h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5r_4793o"/><path class="kgwqmdg7m"/><path class="y8b389s9h"/>`,
		"fallback": "carbon:erase-3d",
	});
}

export default Component;
