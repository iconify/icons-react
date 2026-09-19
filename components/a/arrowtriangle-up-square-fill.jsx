import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh2h_7u6f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh2h_7u6f"/>`,
		"fallback": "f7:arrowtriangle-up-square-fill",
	});
}

export default Component;
