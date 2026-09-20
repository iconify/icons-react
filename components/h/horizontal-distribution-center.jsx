import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt1h73gnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt1h73gnv"/>`,
		"fallback": "uil:horizontal-distribution-center",
	});
}

export default Component;
