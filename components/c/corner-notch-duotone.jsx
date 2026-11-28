import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfempqb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zfempqb1w"/>`,
		"fallback": "iconaut:corner-notch-duotone",
	});
}

export default Component;
