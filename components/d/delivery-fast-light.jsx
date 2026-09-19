import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugb-_6bbc.css';
import '../../css/a/a-kum6b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugb-_6bbc"/><path class="a-kum6b0h"/></g>`,
		"fallback": "iconamoon:delivery-fast-light",
	});
}

export default Component;
