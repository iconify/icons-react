import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfm-2rsun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfm-2rsun"/>`,
		"fallback": "basil:diamond-solid",
	});
}

export default Component;
