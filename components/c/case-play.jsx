import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwv14-5so.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwv14-5so"/>`,
		"fallback": "zmdi:case-play",
	});
}

export default Component;
