import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-fgekbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-fgekbpv"/>`,
		"fallback": "tabler:gps-filled",
	});
}

export default Component;
