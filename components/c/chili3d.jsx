import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg9unybms.css';
import '../../css/f/fv0y09b3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg9unybms"/><path class="fv0y09b3s"/>`,
		"fallback": "selfhst:chili3d",
	});
}

export default Component;
