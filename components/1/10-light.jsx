import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axnrszm_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axnrszm_g"/>`,
		"fallback": "lets-icons:10-light",
	});
}

export default Component;
