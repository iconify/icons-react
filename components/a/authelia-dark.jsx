import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfws57b9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfws57b9m"/>`,
		"fallback": "selfhst:authelia-dark",
	});
}

export default Component;
