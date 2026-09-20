import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaeket_ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaeket_ga"/>`,
		"fallback": "tabler:battery-filled",
	});
}

export default Component;
