import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkd_uccph.css';

const viewBox = {"width":11,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkd_uccph"/>`,
		"fallback": "fontisto:info",
	});
}

export default Component;
