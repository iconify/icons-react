import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnxcau9fp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnxcau9fp"/>`,
		"fallback": "fa7-brands:google-plus-square",
	});
}

export default Component;
