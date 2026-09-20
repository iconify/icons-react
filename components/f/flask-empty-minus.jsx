import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mad-nx4zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mad-nx4zy"/>`,
		"fallback": "mdi:flask-empty-minus",
	});
}

export default Component;
