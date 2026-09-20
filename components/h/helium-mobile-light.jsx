import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq9f5tbsf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq9f5tbsf"/>`,
		"fallback": "selfhst:helium-mobile-light",
	});
}

export default Component;
