import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znpv18b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znpv18b-i"/>`,
		"fallback": "thesvg:google-chrome",
	});
}

export default Component;
