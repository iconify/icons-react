import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj8dscbxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj8dscbxm"/>`,
		"fallback": "selfhst:boost-mobile-light",
	});
}

export default Component;
