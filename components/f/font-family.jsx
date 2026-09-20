import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj_sf5b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj_sf5b_p"/>`,
		"fallback": "ri:font-family",
	});
}

export default Component;
