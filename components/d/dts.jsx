import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhdr_7b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhdr_7b8w"/>`,
		"fallback": "thesvg:dts",
	});
}

export default Component;
