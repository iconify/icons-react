import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbwazrb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbwazrb1h"/>`,
		"fallback": "mage:battery-half",
	});
}

export default Component;
