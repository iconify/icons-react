import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljf0g-bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljf0g-bld"/>`,
		"fallback": "mdi:glass-stange",
	});
}

export default Component;
