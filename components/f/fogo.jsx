import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_dc_jjcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_dc_jjcu"/>`,
		"fallback": "token:fogo",
	});
}

export default Component;
