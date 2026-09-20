import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgtc5k58y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgtc5k58y"/>`,
		"fallback": "tabler:hourglass-filled",
	});
}

export default Component;
