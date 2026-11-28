import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odt31ib3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odt31ib3o"/>`,
		"fallback": "iconaut:expand-sparkles-solid",
	});
}

export default Component;
