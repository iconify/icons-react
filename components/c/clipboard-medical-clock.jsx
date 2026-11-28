import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9e_3fb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9e_3fb_f"/>`,
		"fallback": "noviair-light:clipboard-medical-clock",
	});
}

export default Component;
