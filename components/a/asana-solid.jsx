import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiq2jf6xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiq2jf6xu"/>`,
		"fallback": "basil:asana-solid",
	});
}

export default Component;
