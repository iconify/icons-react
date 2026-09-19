import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpwh6abex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpwh6abex"/>`,
		"fallback": "fa6-brands:google-play",
	});
}

export default Component;
