import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lly1zw81b.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lly1zw81b"/>`,
		"fallback": "f7:camera-filters",
	});
}

export default Component;
