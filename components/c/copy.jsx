import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fum--7bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fum--7bno"/>`,
		"fallback": "noviair:copy",
	});
}

export default Component;
