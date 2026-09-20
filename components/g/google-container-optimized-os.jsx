import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gss19nbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gss19nbzi"/>`,
		"fallback": "thesvg-color:google-container-optimized-os",
	});
}

export default Component;
