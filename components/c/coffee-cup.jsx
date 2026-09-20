import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3he0ryws.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3he0ryws"/>`,
		"fallback": "roentgen:coffee-cup",
	});
}

export default Component;
