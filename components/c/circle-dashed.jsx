import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfox6fcqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfox6fcqu"/>`,
		"fallback": "withicons-kawaii:circle-dashed",
	});
}

export default Component;
