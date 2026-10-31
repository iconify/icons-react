import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaw68pbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaw68pbms"/>`,
		"fallback": "coolicons:circle-chevron-double-down-fill-round",
	});
}

export default Component;
