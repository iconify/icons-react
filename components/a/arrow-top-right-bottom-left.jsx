import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivkodgbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivkodgbku"/>`,
		"fallback": "mdi:arrow-top-right-bottom-left",
	});
}

export default Component;
