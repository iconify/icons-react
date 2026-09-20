import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goy4ui_6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="goy4ui_6h"/>`,
		"fallback": "majesticons:eye",
	});
}

export default Component;
