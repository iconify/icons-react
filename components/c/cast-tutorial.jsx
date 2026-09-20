import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qofpi6brx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qofpi6brx"/>`,
		"fallback": "mdi:cast-tutorial",
	});
}

export default Component;
