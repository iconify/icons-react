import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on9-4bc_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on9-4bc_s"/>`,
		"fallback": "noviair-light:clipboard-refresh",
	});
}

export default Component;
