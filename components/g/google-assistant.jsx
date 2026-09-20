import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt8y22vno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt8y22vno"/>`,
		"fallback": "mdi:google-assistant",
	});
}

export default Component;
