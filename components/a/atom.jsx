import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gey8zob9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gey8zob9m"/>`,
		"fallback": "uil:atom",
	});
}

export default Component;
