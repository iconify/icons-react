import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi857sb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi857sb1k"/>`,
		"fallback": "tabler:arrow-left-square-filled",
	});
}

export default Component;
