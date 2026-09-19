import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcvd6zbwm.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcvd6zbwm"/>`,
		"fallback": "whh:fastforward",
	});
}

export default Component;
