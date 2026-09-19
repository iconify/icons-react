import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8dght63r.css';

const viewBox = {"width":16,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8dght63r"/>`,
		"fallback": "formkit:compress",
	});
}

export default Component;
