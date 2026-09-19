import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofi3dj95o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofi3dj95o"/>`,
		"fallback": "iconamoon:arrow-top-right-2-thin",
	});
}

export default Component;
