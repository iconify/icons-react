import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pckrh5b6o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pckrh5b6o"/>`,
		"fallback": "f7:crop",
	});
}

export default Component;
