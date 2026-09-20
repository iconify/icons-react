import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfrx75qts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfrx75qts"/>`,
		"fallback": "mdi:format-float-left",
	});
}

export default Component;
