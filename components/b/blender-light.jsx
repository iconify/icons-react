import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z50ub1z2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z50ub1z2l"/>`,
		"fallback": "selfhst:blender-light",
	});
}

export default Component;
