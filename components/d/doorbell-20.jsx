import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp-lybbkh.css';
import '../../css/u/unvddzmln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp-lybbkh"/><path class="unvddzmln"/>`,
		"fallback": "energy-icons:doorbell-20",
	});
}

export default Component;
