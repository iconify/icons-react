import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0_uu7e_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i0_uu7e_w"/>`,
		"fallback": "streamline-sharp:hanger-solid",
	});
}

export default Component;
