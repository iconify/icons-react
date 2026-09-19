import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk_1jabpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk_1jabpl"/>`,
		"fallback": "cbi:go3",
	});
}

export default Component;
