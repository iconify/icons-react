import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkgw_kbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkgw_kbjd"/>`,
		"fallback": "withicons:arrow-down-right-gloss",
	});
}

export default Component;
