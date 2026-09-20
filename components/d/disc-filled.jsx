import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrmco2bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrmco2bsf"/>`,
		"fallback": "tabler:disc-filled",
	});
}

export default Component;
