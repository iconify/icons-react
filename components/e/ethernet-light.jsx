import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dny39646t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dny39646t"/>`,
		"fallback": "pullo:ethernet-light",
	});
}

export default Component;
