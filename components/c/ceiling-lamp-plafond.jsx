import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwwq52lah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwwq52lah"/>`,
		"fallback": "cbi:ceiling-lamp-plafond",
	});
}

export default Component;
