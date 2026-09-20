import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud7e4l8zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud7e4l8zk"/>`,
		"fallback": "mage:aeroplane",
	});
}

export default Component;
