import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v22x25v2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v22x25v2m"/>`,
		"fallback": "tabler:bell-pause",
	});
}

export default Component;
