import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjtzypblm.css';
import '../../css/l/lg8uylb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjtzypblm"/><path class="lg8uylb3c"/>`,
		"fallback": "streamline-ultimate:charging-battery-medium-1-bold",
	});
}

export default Component;
