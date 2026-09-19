import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx9_5y40s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx9_5y40s"/>`,
		"fallback": "eva:info-fill",
	});
}

export default Component;
