import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9qtpacsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9qtpacsq"/>`,
		"fallback": "mdi:indent",
	});
}

export default Component;
