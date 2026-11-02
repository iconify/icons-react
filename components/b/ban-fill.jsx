import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv7eq8pia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv7eq8pia"/>`,
		"fallback": "mingcute:ban-fill",
	});
}

export default Component;
