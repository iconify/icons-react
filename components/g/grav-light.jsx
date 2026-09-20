import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgy81lbpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgy81lbpc"/>`,
		"fallback": "selfhst:grav-light",
	});
}

export default Component;
