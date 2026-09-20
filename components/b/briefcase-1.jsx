import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrcaziatd.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrcaziatd"/>`,
		"fallback": "lineicons:briefcase-1",
	});
}

export default Component;
