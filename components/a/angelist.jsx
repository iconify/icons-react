import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofbd67oxu.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofbd67oxu"/>`,
		"fallback": "fontisto:angelist",
	});
}

export default Component;
