import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frt7vtf9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frt7vtf9b"/>`,
		"fallback": "tabler:artboard",
	});
}

export default Component;
