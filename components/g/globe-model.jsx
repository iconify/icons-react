import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4cfp6b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4cfp6b3s"/>`,
		"fallback": "mdi:globe-model",
	});
}

export default Component;
