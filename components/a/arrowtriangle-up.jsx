import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cju9lz9dw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cju9lz9dw"/>`,
		"fallback": "f7:arrowtriangle-up",
	});
}

export default Component;
