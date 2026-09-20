import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp_s0tzwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fp_s0tzwx"/>`,
		"fallback": "streamline-sharp:cloud-off-solid",
	});
}

export default Component;
