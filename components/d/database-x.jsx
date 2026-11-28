import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ait2mcbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ait2mcbqr"/>`,
		"fallback": "noviair-light:database-x",
	});
}

export default Component;
