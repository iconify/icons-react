import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe09b3bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe09b3bsw"/>`,
		"fallback": "iconamoon:do-redo-bold",
	});
}

export default Component;
