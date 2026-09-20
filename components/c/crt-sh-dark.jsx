import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcihm-0sl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcihm-0sl"/>`,
		"fallback": "selfhst:crt-sh-dark",
	});
}

export default Component;
