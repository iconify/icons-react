import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieo439fpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieo439fpo"/>`,
		"fallback": "boxicons:biceps",
	});
}

export default Component;
