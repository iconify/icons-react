import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa2a3yo4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa2a3yo4r"/>`,
		"fallback": "akar-icons:headphone",
	});
}

export default Component;
