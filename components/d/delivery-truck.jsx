import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km9drsbph.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km9drsbph"/>`,
		"fallback": "fluent-mdl2:delivery-truck",
	});
}

export default Component;
