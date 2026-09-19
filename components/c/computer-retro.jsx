import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbd0fnbds.css';
import '../../css/s/sk6tzx05l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbd0fnbds"/><path class="sk6tzx05l"/>`,
		"fallback": "boxicons:computer-retro",
	});
}

export default Component;
