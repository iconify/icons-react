import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx92xrs1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hx92xrs1o"/>`,
		"fallback": "iconamoon:cloud-remove-fill",
	});
}

export default Component;
