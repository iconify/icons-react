import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs-zas9_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs-zas9_g"/>`,
		"fallback": "selfhst:google-cloud-light",
	});
}

export default Component;
