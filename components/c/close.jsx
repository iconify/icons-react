import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_q3o-bkg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_q3o-bkg"/>`,
		"fallback": "openmoji:close",
	});
}

export default Component;
