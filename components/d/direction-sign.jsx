import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsszjbc5q.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsszjbc5q"/>`,
		"fallback": "fontisto:direction-sign",
	});
}

export default Component;
