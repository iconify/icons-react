import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho2xlpbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho2xlpbqa"/>`,
		"fallback": "mdi:airplay",
	});
}

export default Component;
