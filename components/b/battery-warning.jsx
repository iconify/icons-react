import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq5bn3vbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq5bn3vbw"/>`,
		"fallback": "mdi:battery-warning",
	});
}

export default Component;
