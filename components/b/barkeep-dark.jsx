import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw0azo2px.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw0azo2px"/>`,
		"fallback": "selfhst:barkeep-dark",
	});
}

export default Component;
