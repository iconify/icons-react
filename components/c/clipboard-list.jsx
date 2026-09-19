import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeb5a7bpp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeb5a7bpp"/>`,
		"fallback": "fluent-mdl2:clipboard-list",
	});
}

export default Component;
