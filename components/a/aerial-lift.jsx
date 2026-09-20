import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mms7eybus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mms7eybus"/>`,
		"fallback": "tabler:aerial-lift",
	});
}

export default Component;
