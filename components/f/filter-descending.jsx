import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pph0vwbrk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pph0vwbrk"/>`,
		"fallback": "fluent-mdl2:filter-descending",
	});
}

export default Component;
