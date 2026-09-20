import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_nt2_bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_nt2_bmy"/>`,
		"fallback": "mdi:close-circle-multiple-outline",
	});
}

export default Component;
