import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uguz04bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uguz04bll"/>`,
		"fallback": "mdi:attachment-tick",
	});
}

export default Component;
