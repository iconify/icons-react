import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvcj4j3lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvcj4j3lb"/>`,
		"fallback": "iconaut:badge-info-solid",
	});
}

export default Component;
