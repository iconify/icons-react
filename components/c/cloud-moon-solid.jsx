import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs6qk0bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs6qk0bhx"/>`,
		"fallback": "mynaui:cloud-moon-solid",
	});
}

export default Component;
