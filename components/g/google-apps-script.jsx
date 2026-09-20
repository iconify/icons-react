import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s22t9r_ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s22t9r_ek"/>`,
		"fallback": "thesvg-color:google-apps-script",
	});
}

export default Component;
