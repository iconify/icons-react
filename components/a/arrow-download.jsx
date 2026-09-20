import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghyvy3b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghyvy3b6j"/>`,
		"fallback": "proicons:arrow-download",
	});
}

export default Component;
